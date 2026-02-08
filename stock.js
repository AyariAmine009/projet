/* ================================
   TUNISIAN COMPANIES LIST (20+)
   Later → Can come from API
================================ */

const tunisianCompanies = [
"SFBT",
"BIAT",
"ATB",
"BH BANK",
"STB",
"AMEN BANK",
"UBCI",
"DELICE",
"POULINA",
"CARTHAGE CEMENT",
"TPR",
"ASSAD",
"ENNAKL",
"MPBS",
"SOTUVER",
"TELNET",
"SIPHAT",
"MONOPRIX",
"SMART TUNISIE",
"OFFICE PLAST"
];

/* ================================
   LOAD COMPANIES INTO DROPDOWN
================================ */

const select = document.getElementById("companySelect");

tunisianCompanies.forEach(c=>{
  const opt=document.createElement("option");
  opt.value=c;
  opt.textContent=c;
  select.appendChild(opt);
});

/* ================================
   DEMO DATA (REMOVE WHEN API READY)
================================ */

function loadFakeData(){

  /* 
  FUTURE API EXAMPLE:

  fetch("/api/stock?symbol="+symbol)
  .then(r=>r.json())
  .then(data=>{
      updateUI(data)
  })
  */

  document.getElementById("pred1d").innerText = "+1.2%";
  document.getElementById("pred5d").innerText = "+4.8%";

  document.getElementById("predictionReason").innerText =
  "Strong earnings + positive macro outlook";

  document.getElementById("recommendation").innerText = "BUY";
  document.getElementById("recommendReason").innerText =
  "Momentum breakout + institutional buying";

  document.getElementById("sentimentValue").innerText = "Bullish";
  document.getElementById("sentimentReason").innerText =
  "Positive news + social media sentiment";

  document.getElementById("rsiVal").innerText = "62";
  document.getElementById("macdVal").innerText = "Positive";
  document.getElementById("signalVal").innerText = "Buy";

  document.getElementById("indicatorReason").innerText =
  "RSI above 60 + MACD crossover";
}

/* ================================
   ON COMPANY CHANGE
================================ */

select.addEventListener("change",()=>{

  const symbol = select.value;

  /*
  FUTURE:
  loadStockData(symbol)
  */

  loadFakeData();

});

/* INIT */
loadFakeData();

