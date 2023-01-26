// Model

let currency = document.getElementById('currency').value;
let payRate = document.getElementById('pay-rate').value;

let elapsedTime;
let elapsedTimeSec;
let elapsedTimeMin;
let elapsedTimeHr;
let timerIntervalId;
let counterIntervalId;
let timerText;
let payText;
let payEarned;

function handleChange(e) {
  let value = e.target.value;
  let targetId = e.target.getAttribute('id');

  updateValue(value, targetId);
}

function updateValue(value, targetId) {
  switch (targetId) {
    case 'currency':
      currency = value;
      break;
    case 'pay-rate':
      payRate = value;
      break;
  }

  switch (currency) {
    case "USD":
      symbol = "$"
      break;
    case "EUR":
      symbol = "€"
      break;
    case "JPY":
      symbol = "¥"
      break;
    case "GBP":
      symbol = "£"
      break;
  }
}

function startTimer() {
  const startTime = Date.now();
  timerIntervalId = setInterval(function () {
    elapsedTime = Date.now() - startTime;
  }, 10);
}

function startPayCounter() {
  counterIntervalId = setInterval(function () {
    payEarned = (parseFloat((payRate / 60 / 60) * (elapsedTime / 1000))).toFixed(2) + '';
  }, 10);
}

// Controller

function startCounter() {
  document.getElementById('pay-rate').disabled = true;
  startTimer();
  renderTimer();
  startPayCounter();
  renderPayCounter();
}

function stopCounter() {
  document.getElementById('pay-rate').disabled = false;
  clearInterval(timerIntervalId);
  clearInterval(counterIntervalId);
  payEarned = parseFloat(0).toFixed(2);
  elapsedTime = 0;
}

// View

function renderTimer() {
  timerText = document.getElementById("time-text");
  setInterval(function () {
    elapsedTimeHr = Math.floor(elapsedTime / (1000 * 60 * 60)) + '';
    elapsedTimeMin = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)) + '';
    elapsedTimeSec = Math.floor((elapsedTime % (1000 * 60)) / 1000) + '';
    timerText.innerText = elapsedTimeHr.padStart(2, '0') + ":" + elapsedTimeMin.padStart(2, '0') + ":" + elapsedTimeSec.padStart(2, '0');
  }, 10);
}

function renderPayCounter() {
  payText = document.getElementById("pay-text");

  setInterval(function () {
    payText.innerText = symbol + payEarned;
  }, 10);
}