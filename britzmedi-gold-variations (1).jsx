import { useState } from "react";

const logoPath1 = "M997,2049C664.667,2049,332.833,2049,1,2049C1,1366.333,1,683.667,1,1C683.667,1,1366.333,1,2049,1C2049,683.667,2049,1366.333,2049,2049C1698.5,2049,1348,2049,997,2049M851.5,972.106C916.492,972.096,981.484,972.046,1046.476,972.207C1049.501,972.214,1052.986,973.447,1055.468,975.216C1070.519,985.946,1085.339,996.999,1100.239,1007.941C1192.861,1075.965,1285.551,1143.898,1377.974,1212.191C1384.916,1217.32,1391.552,1216.793,1398.781,1216.5C1398.963,1215.704,1399.103,1215.38,1399.103,1215.056C1399.134,1168.724,1399.177,1122.393,1399.083,1076.062C1399.079,1074.53,1398.059,1072.557,1396.87,1071.542C1387.241,1063.322,1377.444,1055.298,1367.726,1047.182C1343.563,1027.002,1319.413,1006.804,1294.853,986.275C1296.524,984.969,1297.895,983.814,1299.348,982.773C1331.281,959.868,1363.183,936.918,1395.229,914.172C1398.39,911.929,1399.233,909.577,1399.231,905.968C1399.156,787.972,1399.17,669.976,1399.172,551.98C1399.172,550.2,1399.172,548.42,1399.172,546.507C1149.591,546.507,900.557,546.507,651.43,546.507C651.43,594.515,651.43,642.111,651.43,690.188C850.596,690.188,1049.496,690.188,1248.673,690.188C1248.673,736.893,1248.673,783.116,1248.673,829.842C1049.479,829.842,850.572,829.842,651.489,829.842C651.489,959.067,651.489,1087.788,651.489,1216.646C809.705,1216.646,967.592,1216.646,1126.927,1216.646C1119.599,1210.891,1113.27,1205.917,1106.937,1200.948C1053.857,1159.295,1000.764,1117.659,947.73,1075.949C944.836,1073.674,941.976,1072.672,938.229,1072.684C894.564,1072.82,850.899,1072.777,807.234,1072.767C805.954,1072.767,804.674,1072.613,803.327,1072.526C803.327,1038.979,803.327,1005.739,803.327,972.106C819.237,972.106,834.869,972.106,851.5,972.106M651.184,1386.5C651.184,1417.268,651.184,1448.036,651.184,1478.964C652.791,1479.1,653.931,1479.282,655.071,1479.281C694.042,1479.252,733.013,1479.309,771.982,1479.065C778.93,1479.022,785.987,1478.287,792.791,1476.886C806.311,1474.104,817.048,1467.386,820.697,1453.016C825.334,1434.751,816.075,1417.021,798.578,1409.988C797.321,1409.483,796.041,1409.032,794.062,1408.291C801.421,1404.59,806.736,1400.107,809.147,1392.815C814.46,1376.748,807.223,1360.758,790.45,1354.458C782.334,1351.41,773.373,1349.305,764.749,1349.142C727.624,1348.44,690.483,1348.614,653.348,1348.492C652.721,1348.49,652.094,1348.782,651.184,1349.007C651.184,1361.23,651.184,1373.365,651.184,1386.5M1250.499,1380.255C1276.521,1380.255,1302.542,1380.255,1329.996,1380.255C1321.399,1385.951,1314.089,1390.824,1306.749,1395.654C1278.938,1413.952,1251.108,1432.222,1223.331,1450.571C1222.102,1451.382,1220.489,1452.833,1220.452,1454.029C1220.2,1462.298,1220.32,1470.579,1220.32,1479C1280.328,1479,1339.548,1479,1398.894,1479C1398.894,1468.123,1398.894,1457.547,1398.894,1446.519C1361.421,1446.519,1324.243,1446.519,1287.064,1446.519C1291.004,1442.832,1295.193,1439.955,1299.465,1437.208C1331.518,1416.602,1363.596,1396.035,1395.621,1375.383C1397.005,1374.491,1398.872,1372.937,1398.926,1371.625C1399.242,1364.033,1399.08,1356.422,1399.08,1348.786C1339.316,1348.786,1280.094,1348.786,1220.787,1348.786C1220.787,1359.402,1220.787,1369.641,1220.787,1380.254C1230.575,1380.254,1240.037,1380.254,1250.499,1380.255M1101.743,1475.895C1088.062,1462.206,1074.38,1448.516,1061.446,1435.574C1069.171,1431.29,1076.923,1427.777,1083.814,1423.017C1102.088,1410.392,1106.005,1376.546,1083.885,1360.806C1073.461,1353.388,1061.989,1349.263,1049.434,1349.104C1013.122,1348.643,976.804,1348.678,940.488,1348.55C939.411,1348.546,938.332,1348.894,937.23,1349.083C937.23,1392.533,937.23,1435.665,937.23,1479.022C948.799,1479.022,960.214,1479.022,972.156,1479.022C972.156,1464.189,972.156,1449.623,972.156,1434.848C986.003,1434.848,999.325,1434.777,1012.644,1434.944C1014.199,1434.963,1016.095,1435.94,1017.23,1437.076C1030.184,1450.033,1042.928,1463.201,1055.993,1476.044C1057.844,1477.863,1061.082,1479.089,1063.714,1479.153C1076.035,1479.454,1088.368,1479.259,1100.697,1479.216C1101.719,1479.213,1102.74,1479.022,1104.296,1478.863C1103.271,1477.693,1102.737,1477.084,1101.743,1475.895z";

const logoPath2 = "M851,972.106C834.869,972.106,819.237,972.106,803.327,972.106C803.327,1005.739,803.327,1038.979,803.327,1072.526C804.674,1072.613,805.954,1072.767,807.234,1072.767C850.899,1072.777,894.564,1072.82,938.229,1072.684C941.976,1072.672,944.836,1073.674,947.73,1075.949C1000.764,1117.659,1053.857,1159.295,1106.937,1200.948C1113.27,1205.917,1119.599,1210.891,1126.927,1216.646C967.592,1216.646,809.705,1216.646,651.489,1216.646C651.489,1087.788,651.489,959.067,651.489,829.842C850.572,829.842,1049.479,829.842,1248.673,829.842C1248.673,783.116,1248.673,736.893,1248.673,690.188C1049.496,690.188,850.596,690.188,651.43,690.188C651.43,642.111,651.43,594.515,651.43,546.507C900.557,546.507,1149.591,546.507,1399.172,546.507C1399.172,548.42,1399.172,550.2,1399.172,551.98C1399.17,669.976,1399.156,787.972,1399.231,905.968C1399.233,909.577,1398.39,911.929,1395.229,914.172C1363.183,936.918,1331.281,959.868,1299.348,982.773C1297.895,983.814,1296.524,984.969,1294.853,986.275C1319.413,1006.804,1343.563,1027.002,1367.726,1047.182C1377.444,1055.298,1387.241,1063.322,1396.87,1071.542C1398.059,1072.557,1399.079,1074.53,1399.083,1076.062C1399.177,1122.393,1399.134,1168.724,1399.103,1215.056C1399.103,1215.38,1398.963,1215.704,1398.781,1216.5C1391.552,1216.793,1384.916,1217.32,1377.974,1212.191C1285.551,1143.898,1192.861,1075.965,1100.239,1007.941C1085.339,996.999,1070.519,985.946,1055.468,975.216C1052.986,973.447,1049.501,972.214,1046.476,972.207C981.484,972.046,916.492,972.096,851,972.106z";

const logoPathB1 = "M651.184,1386C651.184,1373.365,651.184,1361.23,651.184,1349.007C652.094,1348.782,652.721,1348.49,653.348,1348.492C690.483,1348.614,727.624,1348.44,764.749,1349.142C773.373,1349.305,782.334,1351.41,790.45,1354.458C807.223,1360.758,814.46,1376.748,809.147,1392.815C806.736,1400.107,801.421,1404.59,794.062,1408.291C796.041,1409.032,797.321,1409.483,798.578,1409.988C816.075,1417.021,825.334,1434.751,820.697,1453.016C817.048,1467.386,806.311,1474.104,792.791,1476.886C785.987,1478.287,778.93,1479.022,771.982,1479.065C733.013,1479.309,694.042,1479.252,655.071,1479.281C653.931,1479.282,652.791,1479.1,651.184,1478.964C651.184,1448.036,651.184,1417.268,651.184,1386M774.084,1445.861C778.029,1444.804,781.268,1443.202,781.156,1438.251C781.047,1433.432,778.201,1430.825,774.049,1429.809C770.209,1428.869,766.172,1428.347,762.218,1428.327C738.727,1428.205,715.234,1428.282,691.742,1428.292C690.152,1428.292,688.561,1428.292,686.966,1428.292C686.966,1434.725,686.966,1440.611,686.966,1446.679C710,1446.679,732.654,1446.725,755.307,1446.648C761.292,1446.627,767.276,1446.225,774.084,1445.861M769.198,1385.501C765.217,1380.718,759.557,1380.49,754.119,1380.448C732.005,1380.275,709.889,1380.364,687.774,1380.384C687.508,1380.384,687.243,1380.739,686.875,1381.001C686.875,1387.188,686.875,1393.443,686.875,1400.171C688.531,1400.171,689.984,1400.171,691.436,1400.171C712.39,1400.17,733.343,1400.181,754.297,1400.151C756.62,1400.148,758.972,1400.104,761.259,1399.75C769.742,1398.435,772.243,1394.297,769.198,1385.501z";

const logoPathZ = "M1249.999,1380.254C1240.037,1380.254,1230.575,1380.254,1220.787,1380.254C1220.787,1369.641,1220.787,1359.402,1220.787,1348.786C1280.094,1348.786,1339.316,1348.786,1399.08,1348.786C1399.08,1356.422,1399.242,1364.033,1398.926,1371.625C1398.872,1372.937,1397.005,1374.491,1395.621,1375.383C1363.596,1396.035,1331.518,1416.602,1299.465,1437.208C1295.193,1439.955,1291.004,1442.832,1287.064,1446.519C1324.243,1446.519,1361.421,1446.519,1398.894,1446.519C1398.894,1457.547,1398.894,1468.123,1398.894,1479C1339.548,1479,1280.328,1479,1220.32,1479C1220.32,1470.579,1220.2,1462.298,1220.452,1454.029C1220.489,1452.833,1222.102,1451.382,1223.331,1450.571C1251.108,1432.222,1278.938,1413.952,1306.749,1395.654C1314.089,1390.824,1321.399,1385.951,1329.996,1380.255C1302.542,1380.255,1276.521,1380.255,1249.999,1380.254z";

const logoPathR = "M1101.973,1476.185C1102.737,1477.084,1103.271,1477.693,1104.296,1478.863C1102.74,1479.022,1101.719,1479.213,1100.697,1479.216C1088.368,1479.259,1076.035,1479.454,1063.714,1479.153C1061.082,1479.089,1057.844,1477.863,1055.993,1476.044C1042.928,1463.201,1030.184,1450.033,1017.23,1437.076C1016.095,1435.94,1014.199,1434.963,1012.644,1434.944C999.325,1434.777,986.003,1434.848,972.156,1434.848C972.156,1449.623,972.156,1464.189,972.156,1479.022C960.214,1479.022,948.799,1479.022,937.23,1479.022C937.23,1435.665,937.23,1392.533,937.23,1349.083C938.332,1348.894,939.411,1348.546,940.488,1348.55C976.804,1348.678,1013.122,1348.643,1049.434,1349.104C1061.989,1349.263,1073.461,1353.388,1083.885,1360.806C1106.005,1376.546,1102.088,1410.392,1083.814,1423.017C1076.923,1427.777,1069.171,1431.29,1061.446,1435.574C1074.38,1448.516,1088.062,1462.206,1101.973,1476.185M1052.444,1381.813C1050.651,1381.485,1048.861,1380.886,1047.064,1380.869C1024.44,1380.648,1001.814,1380.509,979.189,1380.354C976.903,1380.339,974.617,1380.352,972.289,1380.352C972.289,1388.084,972.289,1395.286,972.289,1402.539C997.574,1402.539,1022.509,1402.62,1047.441,1402.434C1050.48,1402.411,1053.723,1401.399,1056.497,1400.066C1062.116,1397.368,1063.201,1389.607,1058.687,1385.391C1057.153,1383.958,1055.05,1383.136,1052.444,1381.813z";

const goldVariations = [
  {
    name: "Classic Gold",
    nameKr: "클래식 골드",
    desc: "전통적인 고급 골드. 격조 있고 신뢰감을 줍니다.",
    bg: "#1A1A1A",
    main: "#C5A55A",
    accent: "#D4AF37",
    logo: "#E8D48B",
    gradient: "linear-gradient(135deg, #C5A55A 0%, #E8D48B 40%, #D4AF37 60%, #C5A55A 100%)",
  },
  {
    name: "Rose Gold",
    nameKr: "로즈 골드",
    desc: "따뜻하고 부드러운 톤. 여성 타깃 뷰티 디바이스에 적합합니다.",
    bg: "#1C1418",
    main: "#B76E79",
    accent: "#E8A0B0",
    logo: "#F0C4C8",
    gradient: "linear-gradient(135deg, #B76E79 0%, #E8A0B0 40%, #D4919E 60%, #B76E79 100%)",
  },
  {
    name: "Champagne Gold",
    nameKr: "샴페인 골드",
    desc: "밝고 세련된 골드. 모던 럭셔리 느낌입니다.",
    bg: "#F7F3ED",
    main: "#C9A96E",
    accent: "#B8860B",
    logo: "#8B6914",
    gradient: "linear-gradient(135deg, #C9A96E 0%, #E5D2A8 40%, #B8860B 60%, #C9A96E 100%)",
    dark: true,
  },
  {
    name: "Deep Gold",
    nameKr: "딥 골드",
    desc: "깊고 무게감 있는 골드. 프리미엄 의료기기 브랜딩에 강합니다.",
    bg: "#0D0D0D",
    main: "#8B6914",
    accent: "#DAA520",
    logo: "#FFD700",
    gradient: "linear-gradient(135deg, #8B6914 0%, #DAA520 35%, #FFD700 55%, #DAA520 75%, #8B6914 100%)",
  },
  {
    name: "Platinum Gold",
    nameKr: "플래티넘 골드",
    desc: "화이트 골드 느낌. 하이테크 + 럭셔리 융합입니다.",
    bg: "#111116",
    main: "#A89968",
    accent: "#D4C89A",
    logo: "#EDE4C8",
    gradient: "linear-gradient(135deg, #A89968 0%, #D4C89A 35%, #EDE4C8 55%, #D4C89A 75%, #A89968 100%)",
  },
  {
    name: "Antique Gold",
    nameKr: "앤티크 골드",
    desc: "빈티지한 중후한 골드. 전문성과 역사를 강조합니다.",
    bg: "#1A1710",
    main: "#996515",
    accent: "#CD9B1D",
    logo: "#E6BE6A",
    gradient: "linear-gradient(135deg, #996515 0%, #CD9B1D 40%, #E6BE6A 60%, #996515 100%)",
  },
];

const LogoSVG = ({ bg, logoColor, size = 160 }) => (
  <svg viewBox="0 0 2048 2048" width={size} height={size} style={{ display: "block" }}>
    <path fill={bg} d={logoPath1} />
    <path fill={logoColor} d={logoPath2} />
    <path fill={logoColor} d={logoPathB1} />
    <path fill={logoColor} d={logoPathZ} />
    <path fill={logoColor} d={logoPathR} />
  </svg>
);

const GradientLogo = ({ gradient, bgColor, size = 160, id }) => (
  <svg viewBox="0 0 2048 2048" width={size} height={size} style={{ display: "block" }}>
    <defs>
      <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={gradient[0]} />
        <stop offset="40%" stopColor={gradient[1]} />
        <stop offset="70%" stopColor={gradient[2]} />
        <stop offset="100%" stopColor={gradient[3]} />
      </linearGradient>
    </defs>
    <path fill={bgColor} d={logoPath1} />
    <path fill={`url(#grad-${id})`} d={logoPath2} />
    <path fill={`url(#grad-${id})`} d={logoPathB1} />
    <path fill={`url(#grad-${id})`} d={logoPathZ} />
    <path fill={`url(#grad-${id})`} d={logoPathR} />
  </svg>
);

export default function GoldLogoVariations() {
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

  const gradientStops = [
    ["#C5A55A", "#E8D48B", "#D4AF37", "#C5A55A"],
    ["#B76E79", "#E8A0B0", "#D4919E", "#B76E79"],
    ["#C9A96E", "#E5D2A8", "#B8860B", "#C9A96E"],
    ["#8B6914", "#DAA520", "#FFD700", "#8B6914"],
    ["#A89968", "#D4C89A", "#EDE4C8", "#A89968"],
    ["#996515", "#CD9B1D", "#E6BE6A", "#996515"],
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0A",
      color: "#E8E0D0",
      fontFamily: "'Segoe UI', -apple-system, sans-serif",
      padding: "40px 24px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            fontSize: 11,
            letterSpacing: 6,
            color: "#D4AF37",
            marginBottom: 12,
            textTransform: "uppercase",
            fontWeight: 500,
          }}>
            BRITZMEDI BRAND IDENTITY
          </div>
          <h1 style={{
            fontSize: 32,
            fontWeight: 300,
            letterSpacing: 2,
            margin: 0,
            background: "linear-gradient(135deg, #C5A55A, #E8D48B, #D4AF37)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            GOLD COLOR VARIATIONS
          </h1>
          <p style={{
            fontSize: 14,
            color: "#888",
            marginTop: 12,
            fontWeight: 300,
          }}>
            로고 골드 계열 컬러 적용 시안 6종
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}>
          {goldVariations.map((v, i) => (
            <div
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              style={{
                background: "#141414",
                borderRadius: 16,
                border: selected === i ? `2px solid ${v.accent}` : "2px solid #222",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: selected === i ? "scale(1.02)" : "scale(1)",
                boxShadow: selected === i ? `0 8px 32px ${v.accent}22` : "none",
              }}
            >
              {/* Preview area */}
              <div style={{
                background: v.bg,
                padding: "36px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
                minHeight: 220,
                justifyContent: "center",
                position: "relative",
              }}>
                {/* Flat color version */}
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <LogoSVG bg={v.bg === "#F7F3ED" ? "#F7F3ED" : v.bg} logoColor={v.logo} size={100} />
                    <div style={{ fontSize: 9, color: v.dark ? "#666" : "#555", marginTop: 6, letterSpacing: 1 }}>FLAT</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <GradientLogo
                      gradient={gradientStops[i]}
                      bgColor={v.bg === "#F7F3ED" ? "#F7F3ED" : v.bg}
                      size={100}
                      id={i}
                    />
                    <div style={{ fontSize: 9, color: v.dark ? "#666" : "#555", marginTop: 6, letterSpacing: 1 }}>GRADIENT</div>
                  </div>
                </div>

                {/* Variant number badge */}
                <div style={{
                  position: "absolute",
                  top: 12,
                  right: 14,
                  fontSize: 10,
                  color: v.accent,
                  fontWeight: 600,
                  letterSpacing: 2,
                  opacity: 0.6,
                }}>
                  #{String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: v.accent }}>
                    {v.name}
                  </span>
                  <span style={{ fontSize: 13, color: "#888" }}>
                    {v.nameKr}
                  </span>
                </div>
                <p style={{
                  fontSize: 13,
                  color: "#777",
                  margin: 0,
                  lineHeight: 1.5,
                  fontWeight: 300,
                }}>
                  {v.desc}
                </p>

                {/* Color swatches */}
                <div style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 16,
                  alignItems: "center",
                }}>
                  {[v.bg, v.main, v.accent, v.logo].map((c, j) => (
                    <div key={j} style={{ textAlign: "center" }}>
                      <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: 6,
                        background: c,
                        border: `1px solid ${c === "#F7F3ED" || c === "#0D0D0D" || c === "#1A1A1A" ? "#333" : "transparent"}`,
                      }} />
                      <div style={{
                        fontSize: 8,
                        color: "#555",
                        marginTop: 4,
                        fontFamily: "monospace",
                      }}>
                        {c}
                      </div>
                    </div>
                  ))}
                  <div style={{
                    fontSize: 8,
                    color: "#444",
                    marginLeft: 4,
                    lineHeight: 1.3,
                  }}>
                    BG / Main /<br />Accent / Logo
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded view */}
        {selected !== null && (
          <div style={{
            background: "#141414",
            borderRadius: 20,
            border: `1px solid ${goldVariations[selected].accent}33`,
            padding: 40,
            marginBottom: 48,
          }}>
            <div style={{
              fontSize: 11,
              letterSpacing: 4,
              color: goldVariations[selected].accent,
              marginBottom: 20,
              textTransform: "uppercase",
            }}>
              SELECTED · {goldVariations[selected].name}
            </div>

            {/* Large previews */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginBottom: 32,
            }}>
              {/* Dark bg */}
              <div style={{
                background: goldVariations[selected].bg,
                borderRadius: 12,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #222",
                minHeight: 240,
              }}>
                <GradientLogo
                  gradient={gradientStops[selected]}
                  bgColor={goldVariations[selected].bg === "#F7F3ED" ? "#F7F3ED" : goldVariations[selected].bg}
                  size={180}
                  id={`lg-${selected}`}
                />
                <div style={{
                  fontSize: 10,
                  color: goldVariations[selected].accent,
                  letterSpacing: 3,
                  marginTop: 16,
                  opacity: 0.7,
                }}>
                  ON BRAND BG
                </div>
              </div>

              {/* White bg */}
              <div style={{
                background: "#FFFFFF",
                borderRadius: 12,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #222",
                minHeight: 240,
              }}>
                <LogoSVG
                  bg="#FFFFFF"
                  logoColor={goldVariations[selected].main}
                  size={180}
                />
                <div style={{
                  fontSize: 10,
                  color: "#999",
                  letterSpacing: 3,
                  marginTop: 16,
                }}>
                  ON WHITE
                </div>
              </div>
            </div>

            {/* Additional context on dark / light */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
            }}>
              {/* Pure black bg */}
              <div style={{
                background: "#000000",
                borderRadius: 10,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid #1a1a1a",
              }}>
                <LogoSVG bg="#000000" logoColor={goldVariations[selected].logo} size={90} />
                <div style={{ fontSize: 9, color: "#444", letterSpacing: 2, marginTop: 10 }}>ON BLACK</div>
              </div>

              {/* Cream bg */}
              <div style={{
                background: "#F5F0E8",
                borderRadius: 10,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid #ddd",
              }}>
                <LogoSVG bg="#F5F0E8" logoColor={goldVariations[selected].main} size={90} />
                <div style={{ fontSize: 9, color: "#999", letterSpacing: 2, marginTop: 10 }}>ON CREAM</div>
              </div>

              {/* Navy bg */}
              <div style={{
                background: "#0C1425",
                borderRadius: 10,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid #1a1a3a",
              }}>
                <GradientLogo
                  gradient={gradientStops[selected]}
                  bgColor="#0C1425"
                  size={90}
                  id={`navy-${selected}`}
                />
                <div style={{ fontSize: 9, color: "#445", letterSpacing: 2, marginTop: 10 }}>ON NAVY</div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          textAlign: "center",
          fontSize: 11,
          color: "#444",
          letterSpacing: 2,
          paddingTop: 20,
          borderTop: "1px solid #1a1a1a",
        }}>
          BRITZMEDI · BRAND COLOR STUDY · GOLD PALETTE
        </div>
      </div>
    </div>
  );
}
