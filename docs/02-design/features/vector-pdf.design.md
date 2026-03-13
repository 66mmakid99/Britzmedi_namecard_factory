# vector-pdf Design Document

> **Summary**: 뷰어와 완전히 동일한 Single Source of Truth SVG 빌더로 Vector PDF 출력 오차 제거
>
> **Project**: BRITZMEDI Business Card Production System
> **Version**: 1.6.0
> **Author**: Antigravity AI Pair Programming
> **Date**: 2026-03-13
> **Status**: Draft
> **Planning Doc**: (이전 대화 설계 내용 기반, plan 문서 없음)

---

## 1. Overview

### 1.1 Design Goals

- `generateVectorSVG()` (별도 SVG 구현)를 완전히 제거하고 단일 SVG 빌더로 통합
- 뷰어에서 보이는 명함 디자인과 PDF 출력물이 **픽셀 단위로 동일**하도록 보장
- 앞면/뒷면 SVG를 한 번 빌드하여 뷰어 렌더링 + PDF + SVG 다운로드 모두 재사용

### 1.2 Design Principles

- **Single Source of Truth**: 뷰어와 export가 동일 함수 사용
- **좌표계 일관성**: 940×540 SVG units = 94×54mm (1 unit = 0.1mm)
- **HTML 레이아웃 1:1 매핑**: `frontCard()` CSS 값 → SVG 좌표로 정밀 변환
- **폰트 독립성**: PDF 출력 시 TTF 임베드, 뷰어는 CSS 폰트 참조

---

## 2. Architecture

### 2.1 현재 구조 (문제)

```
뷰어 렌더러                    PDF 렌더러
───────────────                ───────────────
frontCard()    ← HTML/CSS →   generateVectorSVG()
backCard()       540×310px      별도 SVG 수작업
                                940×540 (불일치)
         ↕ 두 구현이 독립적 → 레이아웃 오차 발생
```

### 2.2 새 구조 (Single Source of Truth)

```
buildFrontSVG(p, theme)  ─────────────────────────────┐
buildBackSVG(p, theme)   ─────────────────────────┐   │
         │                                         │   │
         ▼                                         ▼   ▼
   뷰어 (HTML div wrapper)             PDF / SVG 다운로드
   frontCard() → <div> + SVG          downloadCurrentPDF()
   backCard()  → <div> + SVG          downloadCurrentSVG()
                                       downloadAllPDF()
```

### 2.3 함수 변경 매핑

| 기존 함수 | 신규 함수 | 변경 내용 |
|-----------|-----------|-----------|
| `generateVectorSVG(p, isBack)` | **봉투 모드 전용 유지** | 카드 모드에서는 미사용. 봉투(envelope) 모드 export 전용으로 유지 |
| `frontCard(p, id, size)` | `frontCard()` + `buildFrontSVG()` | SVG 빌더 호출로 교체 |
| `backCard(p, id, size)` | `backCard()` + `buildBackSVG()` | SVG 빌더 호출로 교체 |
| _(신규)_ | `buildFrontSVG(p, theme)` | 앞면 단일 SVG 빌더 |
| _(신규)_ | `buildBackSVG(p, theme)` | 뒷면 단일 SVG 빌더 |
| `downloadCurrentPDF()` | `downloadCurrentPDF()` | `buildFrontSVG/BackSVG` 사용 |
| `downloadCurrentSVG()` | `downloadCurrentSVG()` | `buildFrontSVG/BackSVG` 사용 |
| `downloadAllPDF()` | `downloadAllPDF()` | `buildFrontSVG/BackSVG` 사용 |

---

## 3. SVG 좌표계 설계

### 3.1 기준 좌표계

```
viewBox = "0 0 940 540"
width = "94mm"   height = "54mm"
→ 1 SVG unit = 0.1mm = 10 units/mm
→ 인쇄 표준 규격 직결 (도련 포함 94×54mm)
```

### 3.2 HTML → SVG 변환 계수

| 항목 | HTML (px) | SVG (units) | 변환 계수 |
|------|-----------|-------------|-----------|
| 카드 가로 | 540 | 940 | × 1.7407 |
| 카드 세로 | 310 | 540 | × 1.7419 |
| 실용 근사 | - | - | **× 1.74** |

### 3.3 앞면 SVG 레이아웃 좌표 (940×540 units, 시각 튜닝 후 최종값)

```
┌────────────────────────────────────────────────────────────────┐ (0,0)
│ 트림가이드: rect(20,20,900,500) stroke-dasharray="4,2"         │
│                                                                │
│ [81, 85] 로고                                                   │
│   scale = 0.065                                                 │
│   translate(81, 85) scale(0.065) translate(-571, -466)         │
│                                                                │
│ [nameX, 122] nameKr   font-size=fontConfig  font-weight=config │
│   nameX = logoRight(81+840*0.065=135) + 22 = 동적 계산         │
│ [titleX, 122] titleKr  (titleX = nameX + max(nameKrW,nameEnW)+5)│
│ [nameX, 156] nameEn   font-size=fontConfig  opacity=0.9        │
│ [titleX, 156] titleEn  font-size=fontConfig  opacity=0.6       │
│                                                                │
│ [86, 337] addressKr  font-size=fontConfig  opacity=0.9         │
│ [86, 362] addressEn  font-size=fontConfig  opacity=0.5         │
│ [86, 385] rect(0,0,59,2) fill=line (구분선)                    │
│                                                                │
│ [86, 414] "M." phone   font-size=fontConfig  color=highlight   │
│ [86, 437] "T." tel     font-size=fontConfig  color=sub         │
│ [86, 459] "F." fax     font-size=fontConfig  color=sub         │
│ line x1=293,y1=398,x2=293,y2=473  stroke=line  (수직선)       │
│ [304, 414] email   font-size=fontConfig  color=highlight       │
│ [304, 437] website font-size=fontConfig  color=sub             │
│                                                                │
│ ※ 모든 좌표는 per-person offset (ox/oy) 적용 가능             │
│ ※ font-size/weight는 fontConfig 전역 설정 참조                 │
└────────────────────────────────────────────────────────────────┘ (940,540)
```

> **Note**: 위 좌표는 시각적 튜닝 후 최종값입니다. 초기 수학적 계산값(로고 56,56 등)에서
> 인쇄 교정을 통해 현재 값으로 조정되었습니다.

### 3.4 뒷면 SVG 레이아웃 (940×540 units)

```
배경: rect(0,0,940,540) fill=bg

Lockup SVG (심볼+텍스트) 중앙 배치:
  lockupH = 250u
  lockupW = lockupH × (908/1225) = 185u
  x = (940 - 185) / 2 = 377.5
  y = (540 - 250) / 2 + 8 = 153
  transform: translate(377.5, 153) scale(250/1225) translate(-571, -466)

배경 오버레이: radial-gradient 중앙 ellipse (rgba(184,169,120,0.06))
```

---

## 4. 폰트 처리 설계

### 4.1 뷰어 (SVG inline)

```svg
<!-- CSS 폰트 참조 (페이지 <head>에 Google Fonts 로드됨) -->
<text font-family="'Noto Sans KR', sans-serif" ...>
```

### 4.2 PDF 출력 (jsPDF)

```javascript
// Noto Sans KR Variable Font TTF 임베드 (Fallback: NanumGothic)
var _fontCache = { notoB64: null };  // 세션 내 캐시

async function loadFont(doc) {
  // Primary: Noto Sans KR 가변 폰트 (뷰어 CSS와 동일 폰트)
  const primary = "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/notosanskr/NotoSansKR%5Bwght%5D.ttf";
  // Fallback: NanumGothic (안정적인 한국어 폰트)
  const fallbackReg = "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/nanumgothic/NanumGothic-Regular.ttf";
  const fallbackBold = "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/nanumgothic/NanumGothic-Bold.ttf";
  // → ArrayBuffer → Base64 → doc.addFileToVFS → doc.addFont
  // fontCallback: (family) => 'Noto Sans KR'
}
```

| 폰트 | 용도 | 처리 |
|------|------|------|
| Noto Sans KR | 뷰어 SVG inline | CSS @font-face (Google Fonts) |
| Noto Sans KR (가변 TTF) | PDF export (Primary) | TTF Base64 임베드, 세션 캐시 |
| NanumGothic (정적 TTF) | PDF export (Fallback) | Primary 실패 시 자동 전환 |

---

## 5. 핵심 함수 시그니처

### 5.1 `buildFrontSVG(p, theme, uid)`

```javascript
/**
 * 앞면 명함 SVG 빌더 (단일 진실 원천)
 * @param {Object} p - 직원 데이터
 * @param {string} theme - 'black' | 'white'
 * @param {string} [uid='v'] - 그라데이션 ID 접미사 (동시 렌더링 시 ID 충돌 방지)
 * @returns {string} 완전한 SVG 문자열 (width="94mm" height="54mm" viewBox="0 0 940 540")
 */
function buildFrontSVG(p, theme, uid) { ... }
```

**SVG 내부 구조:**

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="94mm" height="54mm" viewBox="0 0 940 540">
  <defs>
    <!-- 골드 그라데이션 (pg-front) -->
    <linearGradient id="pg-front" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="..." />
      <stop offset="25%"  stop-color="..." />
      <stop offset="50%"  stop-color="..." />
      <stop offset="75%"  stop-color="..." />
      <stop offset="100%" stop-color="..." />
    </linearGradient>
    <!-- 바닥 라인 그라데이션 (bGrad) -->
    <linearGradient id="bGrad" x1="0%" y1="0%" x2="100%" y2="0%">...</linearGradient>
  </defs>

  <!-- 배경 -->
  <rect width="940" height="540" fill="{c.bg}"/>

  <!-- 배경 오버레이 (미묘한 빛) -->
  <radialGradient .../>
  <rect width="940" height="540" fill="url(#radial-overlay)" opacity="1"/>

  <!-- 바닥 라인 -->
  <rect x="0" y="535" width="940" height="5" fill="url(#bGrad)"/>

  <!-- 트림 가이드 (시각 튜닝 후 최종값) -->
  <rect x="20" y="20" width="900" height="500" fill="none"
        stroke="{trimColor}" stroke-width="1" stroke-dasharray="4,2"/>

  <!-- 로고 (동적 팔레트 기반 그라데이션) -->
  <g transform="translate(81, 85) scale(0.065) translate(-571, -466)">
    {lockupContent}  <!-- getLockupContent(true) 결과 -->
  </g>

  <!-- 이름/직함 (nameX = 로고 우측 + 22, titleX = nameX + max(nameKrW,nameEnW) + 5) -->
  <text x="{nameX+ox('nameKr')}" y="{122+oy('nameKr')}" font-family="'Noto Sans KR',sans-serif"
        font-size="{f.nameKr.size}" font-weight="{f.nameKr.weight}" fill="{c.nameKr}">{p.nameKr}</text>
  <text x="{titleX+ox('titleKr')}" y="{122+oy('titleKr')}" font-size="{f.titleKr.size}" fill="{c.titleKr}" opacity="0.8">{p.titleKr}</text>
  <text x="{nameX+ox('nameEn')}" y="{156+oy('nameEn')}" font-size="{f.nameEn.size}" fill="{c.nameEn}" opacity="0.9">{p.nameEn}</text>
  <text x="{titleX+ox('titleEn')}" y="{156+oy('titleEn')}" font-size="{f.titleEn.size}" fill="{c.titleEn}" opacity="0.6">{p.titleEn}</text>

  <!-- 주소 -->
  <text x="{86+ox('addressKr')}" y="{337+oy('addressKr')}" font-size="{f.addressKr.size}" fill="{c.address}" opacity="0.9">{p.addressKr}</text>
  <text x="{86+ox('addressEn')}" y="{362+oy('addressEn')}" font-size="{f.addressEn.size}" fill="{c.address}" opacity="0.5">{p.addressEn}</text>
  <rect x="86" y="385" width="59" height="2" fill="{c.line}" opacity="0.75"/>

  <!-- 연락처 (왼쪽) -->
  <text x="{86+ox('phone')}" y="{414+oy('phone')}" font-size="{f.phone.size}" fill="{c.highlight}">M. {p.phone}</text>
  <text x="{86+ox('tel')}" y="{437+oy('tel')}" font-size="{f.tel.size}" fill="{c.sub}" opacity="0.85">T. {p.tel}</text>
  <text x="{86+ox('fax')}" y="{459+oy('fax')}" font-size="{f.fax.size}" fill="{c.sub}" opacity="0.85">F. {p.fax}</text>

  <!-- 수직 구분선 -->
  <line x1="293" y1="398" x2="293" y2="473" stroke="{c.line}" stroke-width="1" opacity="0.25"/>

  <!-- 연락처 (오른쪽) -->
  <text x="{304+ox('email')}" y="{414+oy('email')}" font-size="{f.email.size}" fill="{c.highlight}">{p.email}</text>
  <text x="{304+ox('website')}" y="{437+oy('website')}" font-size="{f.website.size}" fill="{c.sub}" opacity="0.85">{p.website}</text>

  <!-- ※ ox()/oy() = per-person offset, f.{key} = fontConfig 전역 설정 -->
</svg>
```

### 5.2 `buildBackSVG(p, theme, uid)`

```javascript
/**
 * 뒷면 명함 SVG 빌더 (단일 진실 원천)
 * @param {Object} p - 직원 데이터
 * @param {string} theme - 'black' | 'white'
 * @param {string} [uid='v'] - 그라데이션 ID 접미사 (동시 렌더링 시 ID 충돌 방지)
 * @returns {string} 완전한 SVG 문자열 (width="94mm" height="54mm" viewBox="0 0 940 540")
 */
function buildBackSVG(p, theme, uid) { ... }
```

### 5.3 뷰어 통합 방식

```javascript
// frontCard() - 뷰어 wrapper (SVG 직접 인라인)
function frontCard(p, id, size) {
  const w = size === 'small' ? 370 : 540;
  const h = size === 'small' ? 212 : 310;
  const svgStr = buildFrontSVG(p, currentTheme, id)
    .replace('width="94mm" height="54mm"', `width="${w}" height="${h}"`);
  return `<div class="card-face" style="width:${w}px;height:${h}px;overflow:hidden;">${svgStr}</div>`;
}
```

> **Note**: SVG를 직접 인라인으로 삽입하여 DOM 내에서 렌더링 (base64 img 방식 대신)

---

## 6. 텍스트 너비 계산

SVG는 CSS의 `auto` 너비 계산이 없으므로, tspan 위치를 명시적으로 계산해야 합니다.

### 6.1 근사 문자 너비 함수

```javascript
function estimateTextWidth(text, fontSize, fontWeight) {
  // 한글: fontSize × 0.95 (거의 정사각형)
  // 영문: fontSize × 0.58 (평균 비율)
  // 숫자/기호: fontSize × 0.55
  let w = 0;
  for (const ch of text) {
    if (/[\uAC00-\uD7A3]/.test(ch)) w += fontSize * 0.95;
    else if (/[A-Z]/.test(ch)) w += fontSize * 0.72;
    else if (/[a-z]/.test(ch)) w += fontSize * 0.58;
    else w += fontSize * 0.55;
  }
  return w;
}
```

---

## 7. PDF 출력 파이프라인

### 7.1 단일 페이지 생성 흐름

```
buildFrontSVG(p, theme)
        ↓
  SVG string
        ↓
  DOMParser.parseFromString()
        ↓
  svgElement (DOM node)
        ↓
  await doc.svg(svgElement, { x:0, y:0, width:94, height:54,
                               fontCallback: () => 'NotoSansKR' })
        ↓
  jsPDF vector page (true vector, no rasterization)
```

### 7.2 폰트 로딩 전략 (CDN → Base64 embed)

```javascript
async function loadPdfFont(doc) {
  const FONT_URLS = [
    // Primary: Noto Sans KR (한글 + 영문 모두 포함)
    "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-kr/files/noto-sans-kr-korean-400-normal.woff2",
    // Fallback: Pretendard
    "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/..."
  ];
  // fetch → arrayBuffer → FileReader.readAsDataURL → base64 추출
  // doc.addFileToVFS('NotoSansKR.ttf', base64)
  // doc.addFont('NotoSansKR.ttf', 'NotoSansKR', 'normal')
}
```

---

## 8. 구현 범위 (수정 파일)

| 파일 | 작업 | 범위 |
|------|------|------|
| `index.html` | `generateVectorSVG()` 봉투 모드 전용 유지 | 카드 미사용, 봉투 export 전용 |
| `index.html` | `buildFrontSVG()` 신규 추가 | ~100줄 |
| `index.html` | `buildBackSVG()` 신규 추가 | ~50줄 |
| `index.html` | `frontCard()` 수정 | SVG 빌더 호출 |
| `index.html` | `backCard()` 수정 | SVG 빌더 호출 |
| `index.html` | `downloadCurrentPDF()` 수정 | 신규 빌더 사용 |
| `index.html` | `downloadAllPDF()` 수정 | 신규 빌더 사용 |
| `index.html` | `downloadCurrentSVG()` 수정 | 신규 빌더 사용 |
| `index.html` | `loadFont()` 수정 | Noto Sans KR 가변 TTF (Fallback: NanumGothic) + 세션 캐시 |

---

## 9. 검증 기준 (Test Plan)

### 9.1 시각적 동일성 체크리스트

- [ ] Black 테마: PDF 배경색 = `#000000` (완전 블랙)
- [ ] White 테마: PDF 배경색 = `#FFFFFF` (완전 화이트)
- [ ] 로고 위치: 뷰어 좌상단 ↔ PDF 좌상단 일치
- [ ] 이름(국문) 크기·위치 일치
- [ ] 이름(영문) 크기·위치 일치
- [ ] 주소 텍스트 줄바꿈·위치 일치
- [ ] 전화/이메일 컬럼 분리 일치
- [ ] 뒷면 로고 중앙 배치 일치
- [ ] 골드 그라데이션 방향·색상 일치
- [ ] 도련(bleed) 영역 포함 확인 (94×54mm)

### 9.2 테스트 절차

1. 브라우저에서 BLACK 테마 앞면 뷰어 확인 (screenshot)
2. PDF 다운로드 → Acrobat/Foxit에서 열기
3. 뷰어 스크린샷과 PDF 나란히 비교
4. WHITE 테마 동일 절차
5. 전체 PDF (downloadAllPDF) 직원별 확인

---

## 10. 구현 순서

1. [ ] `buildFrontSVG(p, theme)` 함수 구현 및 좌표 정밀 튜닝
2. [ ] `buildBackSVG(p, theme)` 함수 구현
3. [ ] `frontCard()` / `backCard()` 를 SVG img 방식으로 교체
4. [ ] `loadPdfFont()` Noto Sans KR 임베드로 교체
5. [ ] `downloadCurrentPDF()` 신규 빌더 사용으로 교체
6. [ ] `downloadCurrentSVG()` 신규 빌더 사용으로 교체
7. [ ] `downloadAllPDF()` 신규 빌더 사용으로 교체
8. [x] `generateVectorSVG()` 봉투 모드 전용으로 분리 (카드 모드 미사용 확인)
9. [ ] 브라우저 열어 뷰어 ↔ PDF 시각 비교
10. [ ] 커밋

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2026-03-13 | 초안 (이전 대화 설계 내용 문서화) | Antigravity AI |
| 0.2 | 2026-03-14 | PDCA Act: 구현 튜닝 좌표 반영, 봉투모드 예외 문서화, 폰트 전략 업데이트 (Noto Sans KR 가변 TTF + NanumGothic fallback), uid 파라미터 추가, per-person offset 반영 | Claude Code |
