# BRITZMEDI Business Card Production System

BRITZMEDI의 프리미엄 비즈니스 카드 제작 및 관리 시스템입니다. 
인쇄용 고품질 벡터 데이터를 생성하며, 엑셀 데이터를 통한 일괄 관리 기능을 제공합니다.

## 주요 기능 (Key Features)

- **프리미엄 디자인 테마**: BLACK & WHITE 테마 전환 기능을 제공하며 각 테마에 최적화된 골드 그라데이션이 적용됩니다.
- **고해상도 벡터 내보내기**: 
  - **SVG (Vector)**: 로고와 텍스트가 깨지지 않는 순수 벡터 데이터로 저장 (디자인 편집용)
  - **PDF (Print)**: 인쇄 표준 규격(94x54mm, 도련 포함)에 맞춘 고해상도 PDF 생성
  - **PNG (Image)**: 4배 스케일링(300DPI급)을 적용한 선명한 이미지 캡처
- **자동화 관리**:
  - **엑셀 임포트**: 명함 데이터를 엑셀로 한 번에 불러오기
  - **일괄 다운로드**: 전 직원의 명함을 하나의 PDF로 묶어서 다운로드
  - **실시간 프리뷰**: 앞면/뒷면의 디자인을 즉시 확인 가능

## 사용 방법 (How to Use)

1. **테마 선택**: 상단의 `BLACK` / `WHITE` 버튼을 눌러 원하는 디자인을 선택합니다.
2. **정보 확인**: 탭을 눌러 각 직원별 명함 디자인을 확인합니다.
3. **데이터 수정**: `Download Excel Template`으로 양식을 받아 수정한 뒤, `Import Excel`로 업로드하여 데이터를 갱신할 수 있습니다.
4. **파일 다운로드**: 인쇄용으로는 `SVG` 또는 `PDF` 형식을 권장합니다.

## 기술 스택 (Tech Stack)

- **Frontend**: HTML5, Vanilla CSS, JavaScript (ES6+)
- **Libraries**: 
  - [jsPDF](https://github.com/parallax/jsPDF) (PDF 생성)
  - [SheetJS](https://github.com/SheetJS/sheetjs) (Excel 데이터 처리)
  - [html2canvas](https://github.com/niklasvh/html2canvas) (이미지 렌더링 보조)

## 프로젝트 정보

- **브랜드**: BRITZMEDI
- **개발**: Antigravity AI Pair Programming
- **배포**: Cloudflare Pages
