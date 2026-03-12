import { useState } from "react";

const logoPath1 = "M997,2049C664.667,2049,332.833,2049,1,2049C1,1366.333,1,683.667,1,1C683.667,1,1366.333,1,2049,1C2049,683.667,2049,1366.333,2049,2049C1698.5,2049,1348,2049,997,2049M851.5,972.106C916.492,972.096,981.484,972.046,1046.476,972.207C1049.501,972.214,1052.986,973.447,1055.468,975.216C1070.519,985.946,1085.339,996.999,1100.239,1007.941C1192.861,1075.965,1285.551,1143.898,1377.974,1212.191C1384.916,1217.32,1391.552,1216.793,1398.781,1216.5C1398.963,1215.704,1399.103,1215.38,1399.103,1215.056C1399.134,1168.724,1399.177,1122.393,1399.083,1076.062C1399.079,1074.53,1398.059,1072.557,1396.87,1071.542C1387.241,1063.322,1377.444,1055.298,1367.726,1047.182C1343.563,1027.002,1319.413,1006.804,1294.853,986.275C1296.524,984.969,1297.895,983.814,1299.348,982.773C1331.281,959.868,1363.183,936.918,1395.229,914.172C1398.39,911.929,1399.233,909.577,1399.231,905.968C1399.156,787.972,1399.17,669.976,1399.172,551.98C1399.172,550.2,1399.172,548.42,1399.172,546.507C1149.591,546.507,900.557,546.507,651.43,546.507C651.43,594.515,651.43,642.111,651.43,690.188C850.596,690.188,1049.496,690.188,1248.673,690.188C1248.673,736.893,1248.673,783.116,1248.673,829.842C1049.479,829.842,850.572,829.842,651.489,829.842C651.489,959.067,651.489,1087.788,651.489,1216.646C809.705,1216.646,967.592,1216.646,1126.927,1216.646C1119.599,1210.891,1113.27,1205.917,1106.937,1200.948C1053.857,1159.295,1000.764,1117.659,947.73,1075.949C944.836,1073.674,941.976,1072.672,938.229,1072.684C894.564,1072.82,850.899,1072.777,807.234,1072.767C805.954,1072.767,804.674,1072.613,803.327,1072.526C803.327,1038.979,803.327,1005.739,803.327,972.106C819.237,972.106,834.869,972.106,851.5,972.106M651.184,1386.5C651.184,1417.268,651.184,1448.036,651.184,1478.964C652.791,1479.1,653.931,1479.282,655.071,1479.281C694.042,1479.252,733.013,1479.309,771.982,1479.065C778.93,1479.022,785.987,1478.287,792.791,1476.886C806.311,1474.104,817.048,1467.386,820.697,1453.016C825.334,1434.751,816.075,1417.021,798.578,1409.988C797.321,1409.483,796.041,1409.032,794.062,1408.291C801.421,1404.59,806.736,1400.107,809.147,1392.815C814.46,1376.748,807.223,1360.758,790.45,1354.458C782.334,1351.41,773.373,1349.305,764.749,1349.142C727.624,1348.44,690.483,1348.614,653.348,1348.492C652.721,1348.49,652.094,1348.782,651.184,1349.007C651.184,1361.23,651.184,1373.365,651.184,1386.5M1250.499,1380.255C1276.521,1380.255,1302.542,1380.255,1329.996,1380.255C1321.399,1385.951,1314.089,1390.824,1306.749,1395.654C1278.938,1413.952,1251.108,1432.222,1223.331,1450.571C1222.102,1451.382,1220.489,1452.833,1220.452,1454.029C1220.2,1462.298,1220.32,1470.579,1220.32,1479C1280.328,1479,1339.548,1479,1398.894,1479C1398.894,1468.123,1398.894,1457.547,1398.894,1446.519C1361.421,1446.519,1324.243,1446.519,1287.064,1446.519C1291.004,1442.832,1295.193,1439.955,1299.465,1437.208C1331.518,1416.602,1363.596,1396.035,1395.621,1375.383C1397.005,1374.491,1398.872,1372.937,1398.926,1371.625C1399.242,1364.033,1399.08,1356.422,1399.08,1348.786C1339.316,1348.786,1280.094,1348.786,1220.787,1348.786C1220.787,1359.402,1220.787,1369.641,1220.787,1380.254C1230.575,1380.254,1240.037,1380.254,1250.499,1380.255M1101.743,1475.895C1088.062,1462.206,1074.38,1448.516,1061.446,1435.574C1069.171,1431.29,1076.923,1427.777,1083.814,1423.017C1102.088,1410.392,1106.005,1376.546,1083.885,1360.806C1073.461,1353.388,1061.989,1349.263,1049.434,1349.104C1013.122,1348.643,976.804,1348.678,940.488,1348.55C939.411,1348.546,938.332,1348.894,937.23,1349.083C937.23,1392.533,937.23,1435.665,937.23,1479.022C948.799,1479.022,960.214,1479.022,972.156,1479.022C972.156,1464.189,972.156,1449.623,972.156,1434.848C986.003,1434.848,999.325,1434.777,1012.644,1434.944C1014.199,1434.963,1016.095,1435.94,1017.23,1437.076C1030.184,1450.033,1042.928,1463.201,1055.993,1476.044C1057.844,1477.863,1061.082,1479.089,1063.714,1479.153C1076.035,1479.454,1088.368,1479.259,1100.697,1479.216C1101.719,1479.213,1102.74,1479.022,1104.296,1478.863C1103.271,1477.693,1102.737,1477.084,1101.743,1475.895z";

const logoPath2 = "M851,972.106C834.869,972.106,819.237,972.106,803.327,972.106C803.327,1005.739,803.327,1038.979,803.327,1072.526C804.674,1072.613,805.954,1072.767,807.234,1072.767C850.899,1072.777,894.564,1072.82,938.229,1072.684C941.976,1072.672,944.836,1073.674,947.73,1075.949C1000.764,1117.659,1053.857,1159.295,1106.937,1200.948C1113.27,1205.917,1119.599,1210.891,1126.927,1216.646C967.592,1216.646,809.705,1216.646,651.489,1216.646C651.489,1087.788,651.489,959.067,651.489,829.842C850.572,829.842,1049.479,829.842,1248.673,829.842C1248.673,783.116,1248.673,736.893,1248.673,690.188C1049.496,690.188,850.596,690.188,651.43,690.188C651.43,642.111,651.43,594.515,651.43,546.507C900.557,546.507,1149.591,546.507,1399.172,546.507C1399.172,548.42,1399.172,550.2,1399.172,551.98C1399.17,669.976,1399.156,787.972,1399.231,905.968C1399.233,909.577,1398.39,911.929,1395.229,914.172C1363.183,936.918,1331.281,959.868,1299.348,982.773C1297.895,983.814,1296.524,984.969,1294.853,986.275C1319.413,1006.804,1343.563,1027.002,1367.726,1047.182C1377.444,1055.298,1387.241,1063.322,1396.87,1071.542C1398.059,1072.557,1399.079,1074.53,1399.083,1076.062C1399.177,1122.393,1399.134,1168.724,1399.103,1215.056C1399.103,1215.38,1398.963,1215.704,1398.781,1216.5C1391.552,1216.793,1384.916,1217.32,1377.974,1212.191C1285.551,1143.898,1192.861,1075.965,1100.239,1007.941C1085.339,996.999,1070.519,985.946,1055.468,975.216C1052.986,973.447,1049.501,972.214,1046.476,972.207C981.484,972.046,916.492,972.096,851,972.106z";

const logoPathB1 = "M651.184,1386C651.184,1373.365,651.184,1361.23,651.184,1349.007C652.094,1348.782,652.721,1348.49,653.348,1348.492C690.483,1348.614,727.624,1348.44,764.749,1349.142C773.373,1349.305,782.334,1351.41,790.45,1354.458C807.223,1360.758,814.46,1376.748,809.147,1392.815C806.736,1400.107,801.421,1404.59,794.062,1408.291C796.041,1409.032,797.321,1409.483,798.578,1409.988C816.075,1417.021,825.334,1434.751,820.697,1453.016C817.048,1467.386,806.311,1474.104,792.791,1476.886C785.987,1478.287,778.93,1479.022,771.982,1479.065C733.013,1479.309,694.042,1479.252,655.071,1479.281C653.931,1479.282,652.791,1479.1,651.184,1478.964C651.184,1448.036,651.184,1417.268,651.184,1386M774.084,1445.861C778.029,1444.804,781.268,1443.202,781.156,1438.251C781.047,1433.432,778.201,1430.825,774.049,1429.809C770.209,1428.869,766.172,1428.347,762.218,1428.327C738.727,1428.205,715.234,1428.282,691.742,1428.292C690.152,1428.292,688.561,1428.292,686.966,1428.292C686.966,1434.725,686.966,1440.611,686.966,1446.679C710,1446.679,732.654,1446.725,755.307,1446.648C761.292,1446.627,767.276,1446.225,774.084,1445.861M769.198,1385.501C765.217,1380.718,759.557,1380.49,754.119,1380.448C732.005,1380.275,709.889,1380.364,687.774,1380.384C687.508,1380.384,687.243,1380.739,686.875,1381.001C686.875,1387.188,686.875,1393.443,686.875,1400.171C688.531,1400.171,689.984,1400.171,691.436,1400.171C712.39,1400.17,733.343,1400.181,754.297,1400.151C756.62,1400.148,758.972,1400.104,761.259,1399.75C769.742,1398.435,772.243,1394.297,769.198,1385.501z";

const logoPathZ = "M1249.999,1380.254C1240.037,1380.254,1230.575,1380.254,1220.787,1380.254C1220.787,1369.641,1220.787,1359.402,1220.787,1348.786C1280.094,1348.786,1339.316,1348.786,1399.08,1348.786C1399.08,1356.422,1399.242,1364.033,1398.926,1371.625C1398.872,1372.937,1397.005,1374.491,1395.621,1375.383C1363.596,1396.035,1331.518,1416.602,1299.465,1437.208C1295.193,1439.955,1291.004,1442.832,1287.064,1446.519C1324.243,1446.519,1361.421,1446.519,1398.894,1446.519C1398.894,1457.547,1398.894,1468.123,1398.894,1479C1339.548,1479,1280.328,1479,1220.32,1479C1220.32,1470.579,1220.2,1462.298,1220.452,1454.029C1220.489,1452.833,1222.102,1451.382,1223.331,1450.571C1251.108,1432.222,1278.938,1413.952,1306.749,1395.654C1314.089,1390.824,1321.399,1385.951,1329.996,1380.255C1302.542,1380.255,1276.521,1380.255,1249.999,1380.254z";

const logoPathR = "M1101.973,1476.185C1102.737,1477.084,1103.271,1477.693,1104.296,1478.863C1102.74,1479.022,1101.719,1479.213,1100.697,1479.216C1088.368,1479.259,1076.035,1479.454,1063.714,1479.153C1061.082,1479.089,1057.844,1477.863,1055.993,1476.044C1042.928,1463.201,1030.184,1450.033,1017.23,1437.076C1016.095,1435.94,1014.199,1434.963,1012.644,1434.944C999.325,1434.777,986.003,1434.848,972.156,1434.848C972.156,1449.623,972.156,1464.189,972.156,1479.022C960.214,1479.022,948.799,1479.022,937.23,1479.022C937.23,1435.665,937.23,1392.533,937.23,1349.083C938.332,1348.894,939.411,1348.546,940.488,1348.55C976.804,1348.678,1013.122,1348.643,1049.434,1349.104C1061.989,1349.263,1073.461,1353.388,1083.885,1360.806C1106.005,1376.546,1102.088,1410.392,1083.814,1423.017C1076.923,1427.777,1069.171,1431.29,1061.446,1435.574C1074.38,1448.516,1088.062,1462.206,1101.973,1476.185M1052.444,1381.813C1050.651,1381.485,1048.861,1380.886,1047.064,1380.869C1024.44,1380.648,1001.814,1380.509,979.189,1380.354C976.903,1380.339,974.617,1380.352,972.289,1380.352C972.289,1388.084,972.289,1395.286,972.289,1402.539C997.574,1402.539,1022.509,1402.62,1047.441,1402.434C1050.48,1402.411,1053.723,1401.399,1056.497,1400.066C1062.116,1397.368,1063.201,1389.607,1058.687,1385.391C1057.153,1383.958,1055.05,1383.136,1052.444,1381.813z";

const Logo = ({ color, size = 40, id = "card" }) => (
  <svg viewBox="500 400 1100 1200" width={size} height={size * 1.09} style={{ display: "block" }}>
    <defs>
      <linearGradient id={`pg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A89968" />
        <stop offset="35%" stopColor="#D4C89A" />
        <stop offset="55%" stopColor="#EDE4C8" />
        <stop offset="75%" stopColor="#D4C89A" />
        <stop offset="100%" stopColor="#A89968" />
      </linearGradient>
    </defs>
    <path fill={color === "gradient" ? `url(#pg-${id})` : color} d={logoPath2} />
    <path fill={color === "gradient" ? `url(#pg-${id})` : color} d={logoPathB1} />
    <path fill={color === "gradient" ? `url(#pg-${id})` : color} d={logoPathZ} />
    <path fill={color === "gradient" ? `url(#pg-${id})` : color} d={logoPathR} />
  </svg>
);

const SymbolOnly = ({ color, size = 40, id = "sym" }) => (
  <svg viewBox="500 400 1000 900" width={size} height={size * 0.9} style={{ display: "block" }}>
    <defs>
      <linearGradient id={`ps-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A89968" />
        <stop offset="35%" stopColor="#D4C89A" />
        <stop offset="55%" stopColor="#EDE4C8" />
        <stop offset="75%" stopColor="#D4C89A" />
        <stop offset="100%" stopColor="#A89968" />
      </linearGradient>
    </defs>
    <path fill={color === "gradient" ? `url(#ps-${id})` : color} d={logoPath2} />
  </svg>
);

const C = {
  bg: "#111116",
  main: "#A89968",
  accent: "#D4C89A",
  light: "#EDE4C8",
  muted: "#8A8060",
  line: "#A8996830",
  lineLight: "#A8996818",
  textDim: "#6B6550",
  textBody: "#C4B88A",
};

const CardFace = ({ children, style = {} }) => (
  <div style={{
    width: 450,
    height: 255,
    borderRadius: 10,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
    ...style,
  }}>
    {children}
  </div>
);

// ─── DESIGN A: Minimal Horizontal ───
const DesignA_Front = () => (
  <CardFace style={{ background: C.bg }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 80% 20%, #1a1a2210 0%, transparent 50%)` }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.main}40, transparent)` }} />
    <div style={{ padding: "32px 36px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <Logo color="gradient" size={32} id="a-f" />
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: C.light }}>BRITZMEDI</div>
          <div style={{ fontSize: 7.5, letterSpacing: 3, color: C.muted, marginTop: 1 }}>AESTHETIC MEDICAL DEVICE</div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 17, fontWeight: 300, letterSpacing: 2, color: C.light, marginBottom: 4 }}>이성호</div>
        <div style={{ fontSize: 8, letterSpacing: 4, color: C.main, fontWeight: 500 }}>CHIEF MARKETING OFFICER</div>
      </div>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        <div style={{ fontSize: 8.5, color: C.textDim, letterSpacing: 0.5, lineHeight: 1.7 }}>
          <div>sh.lee@britzmedi.co.kr</div>
          <div>010-6525-9442</div>
        </div>
        <div style={{ width: 1, height: 24, background: C.lineLight }} />
        <div style={{ fontSize: 8.5, color: C.textDim, letterSpacing: 0.5, lineHeight: 1.7 }}>
          <div>britzmedi.com</div>
          <div>Seoul, Korea</div>
        </div>
      </div>
    </div>
  </CardFace>
);

const DesignA_Back = () => (
  <CardFace style={{ background: C.bg }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 50% 50%, #1a1a2208 0%, transparent 60%)` }} />
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <Logo color="gradient" size={64} id="a-b" />
      <div style={{ fontSize: 10, letterSpacing: 8, color: C.main, marginTop: 16, fontWeight: 400 }}>BRITZMEDI</div>
      <div style={{ width: 40, height: 1, background: `linear-gradient(90deg, transparent, ${C.main}, transparent)`, margin: "10px 0" }} />
      <div style={{ fontSize: 7, letterSpacing: 4, color: C.textDim }}>AESTHETIC MEDICAL DEVICE</div>
    </div>
  </CardFace>
);

// ─── DESIGN B: Gold Accent Line ───
const DesignB_Front = () => (
  <CardFace style={{ background: "#0C0C10" }}>
    <div style={{ position: "absolute", top: 0, left: 44, width: 1, height: "100%", background: `linear-gradient(180deg, ${C.main}00, ${C.main}60, ${C.main}00)` }} />
    <div style={{ padding: "32px 36px 28px 64px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
      <div>
        <div style={{ fontSize: 19, fontWeight: 300, letterSpacing: 2, color: C.light }}>이성호</div>
        <div style={{ fontSize: 8, letterSpacing: 5, color: C.main, marginTop: 5, fontWeight: 500 }}>CHIEF MARKETING OFFICER</div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <Logo color={C.accent} size={22} id="b-f" />
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: C.accent }}>BRITZMEDI</div>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ fontSize: 8.5, color: C.textDim, lineHeight: 1.8, letterSpacing: 0.3 }}>
            <div>sh.lee@britzmedi.co.kr</div>
            <div>010-6525-9442</div>
          </div>
          <div style={{ fontSize: 8.5, color: C.textDim, lineHeight: 1.8, letterSpacing: 0.3 }}>
            <div>britzmedi.com</div>
            <div>Seoul, Korea</div>
          </div>
        </div>
      </div>
    </div>
  </CardFace>
);

const DesignB_Back = () => (
  <CardFace style={{ background: "#0C0C10" }}>
    <div style={{ position: "absolute", top: "50%", left: 44, transform: "translateY(-50%)" }}>
      <SymbolOnly color="gradient" size={50} id="b-b" />
    </div>
    <div style={{ position: "absolute", top: 0, left: 44, width: 1, height: "100%", background: `linear-gradient(180deg, ${C.main}00, ${C.main}40, ${C.main}00)` }} />
    <div style={{ position: "absolute", bottom: 32, right: 36, textAlign: "right" }}>
      <div style={{ fontSize: 10, letterSpacing: 7, color: C.main, fontWeight: 500 }}>BRITZMEDI</div>
      <div style={{ fontSize: 7, letterSpacing: 3, color: C.textDim, marginTop: 4 }}>AESTHETIC MEDICAL DEVICE</div>
    </div>
  </CardFace>
);

// ─── DESIGN C: Bold Split ───
const DesignC_Front = () => (
  <CardFace>
    <div style={{ display: "flex", height: "100%" }}>
      {/* Left gold panel */}
      <div style={{
        width: 140,
        background: "linear-gradient(180deg, #A89968, #D4C89A 40%, #EDE4C8 60%, #D4C89A 80%, #A89968)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        <Logo color="#111116" size={44} id="c-f" />
        <div style={{ fontSize: 8, letterSpacing: 5, color: "#111116", marginTop: 12, fontWeight: 700 }}>BRITZ</div>
        <div style={{ fontSize: 8, letterSpacing: 5, color: "#111116", fontWeight: 700 }}>MEDI</div>
      </div>
      {/* Right dark panel */}
      <div style={{
        flex: 1,
        background: C.bg,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 300, letterSpacing: 2, color: C.light }}>이성호</div>
          <div style={{ fontSize: 8, letterSpacing: 4, color: C.main, marginTop: 5, fontWeight: 500 }}>CHIEF MARKETING OFFICER</div>
        </div>
        <div style={{ fontSize: 8.5, color: C.textDim, lineHeight: 1.9, letterSpacing: 0.3 }}>
          <div>sh.lee@britzmedi.co.kr</div>
          <div>010-6525-9442</div>
          <div style={{ marginTop: 4 }}>britzmedi.com</div>
        </div>
      </div>
    </div>
  </CardFace>
);

const DesignC_Back = () => (
  <CardFace>
    <div style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #A89968, #D4C89A 30%, #EDE4C8 50%, #D4C89A 70%, #A89968)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Logo color="#111116" size={56} id="c-b" />
      <div style={{ fontSize: 11, letterSpacing: 8, color: "#111116", marginTop: 14, fontWeight: 600 }}>BRITZMEDI</div>
      <div style={{ width: 40, height: 1, background: "#11111630", margin: "8px 0" }} />
      <div style={{ fontSize: 7, letterSpacing: 4, color: "#11111688" }}>AESTHETIC MEDICAL DEVICE</div>
    </div>
  </CardFace>
);

// ─── DESIGN D: Ultra Minimal ───
const DesignD_Front = () => (
  <CardFace style={{ background: "#080810" }}>
    <div style={{ padding: "0 36px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
      <div>
        <div style={{ fontSize: 20, fontWeight: 200, letterSpacing: 3, color: C.light, marginBottom: 6 }}>이성호</div>
        <div style={{ fontSize: 8, letterSpacing: 5, color: C.muted, fontWeight: 400 }}>CMO</div>
        <div style={{ width: 24, height: 1, background: C.main, margin: "14px 0" }} />
        <div style={{ fontSize: 8, color: C.textDim, lineHeight: 2, letterSpacing: 0.4 }}>
          <div>sh.lee@britzmedi.co.kr</div>
          <div>010-6525-9442</div>
          <div>britzmedi.com</div>
        </div>
      </div>
      <div style={{ opacity: 0.12, position: "absolute", right: -10, top: "50%", transform: "translateY(-50%)" }}>
        <Logo color={C.light} size={180} id="d-f-bg" />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Logo color="gradient" size={48} id="d-f" />
      </div>
    </div>
  </CardFace>
);

const DesignD_Back = () => (
  <CardFace style={{ background: "#080810" }}>
    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <div style={{ opacity: 0.04, position: "absolute" }}>
        <Logo color={C.light} size={220} id="d-b-bg" />
      </div>
      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <Logo color="gradient" size={50} id="d-b" />
        <div style={{ fontSize: 9, letterSpacing: 8, color: C.main, marginTop: 14, fontWeight: 300 }}>BRITZMEDI</div>
      </div>
    </div>
  </CardFace>
);

const designs = [
  { name: "A. Minimal Horizontal", nameKr: "미니멀 가로형", desc: "깔끔한 정보 배치. 가장 비즈니스 정석에 가까운 레이아웃입니다.", Front: DesignA_Front, Back: DesignA_Back },
  { name: "B. Gold Accent Line", nameKr: "골드 라인 포인트", desc: "세로 골드 라인이 시선을 유도합니다. 심플하면서도 개성이 있습니다.", Front: DesignB_Front, Back: DesignB_Back },
  { name: "C. Bold Split", nameKr: "볼드 스플릿", desc: "골드 패널과 블랙 패널 분할. 가장 대담하고 기억에 남는 디자인입니다.", Front: DesignC_Front, Back: DesignC_Back },
  { name: "D. Ultra Minimal", nameKr: "울트라 미니멀", desc: "극도로 절제된 디자인. 배경에 로고 워터마크가 은은하게 깔립니다.", Front: DesignD_Front, Back: DesignD_Back },
];

export default function BusinessCardDesign() {
  const [activeDesign, setActiveDesign] = useState(0);
  const [showBack, setShowBack] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050508",
      color: "#E8E0D0",
      fontFamily: "'Segoe UI', -apple-system, sans-serif",
      padding: "36px 20px",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontSize: 9, letterSpacing: 7, color: C.main, marginBottom: 8, fontWeight: 600 }}>BRITZMEDI · PLATINUM GOLD</div>
          <h1 style={{ fontSize: 28, fontWeight: 200, letterSpacing: 4, margin: 0, color: C.light }}>BUSINESS CARD DESIGN</h1>
          <div style={{ width: 50, height: 1, background: `linear-gradient(90deg, transparent, ${C.main}, transparent)`, margin: "14px auto" }} />
          <p style={{ fontSize: 12, color: "#555", fontWeight: 300 }}>플래티넘 골드 명함 시안 4종</p>
        </div>

        {/* Navigation tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 6,
          marginBottom: 40,
        }}>
          {designs.map((d, i) => (
            <button
              key={i}
              onClick={() => { setActiveDesign(i); setShowBack(false); }}
              style={{
                background: activeDesign === i ? C.main + "20" : "transparent",
                border: `1px solid ${activeDesign === i ? C.main + "60" : "#222"}`,
                borderRadius: 8,
                padding: "10px 18px",
                cursor: "pointer",
                color: activeDesign === i ? C.accent : "#555",
                fontSize: 11,
                letterSpacing: 1,
                fontWeight: activeDesign === i ? 600 : 400,
                transition: "all 0.3s ease",
              }}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* Main preview */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{
            display: "inline-flex",
            gap: 4,
            background: "#111",
            borderRadius: 6,
            padding: 3,
            marginBottom: 24,
          }}>
            <button
              onClick={() => setShowBack(false)}
              style={{
                background: !showBack ? C.main + "25" : "transparent",
                border: "none",
                borderRadius: 4,
                padding: "6px 16px",
                cursor: "pointer",
                color: !showBack ? C.accent : "#555",
                fontSize: 10,
                letterSpacing: 2,
                fontWeight: 500,
              }}
            >FRONT</button>
            <button
              onClick={() => setShowBack(true)}
              style={{
                background: showBack ? C.main + "25" : "transparent",
                border: "none",
                borderRadius: 4,
                padding: "6px 16px",
                cursor: "pointer",
                color: showBack ? C.accent : "#555",
                fontSize: 10,
                letterSpacing: 2,
                fontWeight: 500,
              }}
            >BACK</button>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          {!showBack
            ? (() => { const Comp = designs[activeDesign].Front; return <Comp />; })()
            : (() => { const Comp = designs[activeDesign].Back; return <Comp />; })()
          }
        </div>

        {/* Design info */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 13, color: C.accent, fontWeight: 500, letterSpacing: 1, marginBottom: 4 }}>
            {designs[activeDesign].nameKr}
          </div>
          <div style={{ fontSize: 12, color: "#555", fontWeight: 300, maxWidth: 400, margin: "0 auto" }}>
            {designs[activeDesign].desc}
          </div>
        </div>

        {/* All designs overview */}
        <div style={{
          borderTop: `1px solid #151515`,
          paddingTop: 36,
        }}>
          <div style={{ fontSize: 9, letterSpacing: 5, color: "#444", textAlign: "center", marginBottom: 28 }}>ALL DESIGNS OVERVIEW</div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}>
            {designs.map((d, i) => {
              const Front = d.Front;
              const Back = d.Back;
              return (
                <div key={i} style={{ textAlign: "center" }}>
                  <div
                    onClick={() => { setActiveDesign(i); setShowBack(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    style={{
                      cursor: "pointer",
                      transform: "scale(0.72)",
                      transformOrigin: "top center",
                      marginBottom: -60,
                      opacity: activeDesign === i ? 1 : 0.6,
                      transition: "opacity 0.3s",
                    }}
                  >
                    <div style={{ marginBottom: 12 }}><Front /></div>
                    <Back />
                  </div>
                  <div style={{
                    fontSize: 10,
                    color: activeDesign === i ? C.accent : "#444",
                    letterSpacing: 2,
                    marginTop: 70,
                    fontWeight: activeDesign === i ? 600 : 400,
                  }}>
                    {d.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          fontSize: 9,
          letterSpacing: 4,
          color: "#282828",
          marginTop: 48,
          paddingTop: 20,
          borderTop: "1px solid #111",
        }}>
          BRITZMEDI · PLATINUM GOLD · BUSINESS CARD STUDY
        </div>
      </div>
    </div>
  );
}
