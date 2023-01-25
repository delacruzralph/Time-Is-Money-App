/* TODO
  - Timer 
  - Wage Counter
  - Pause Counter
  - Stop Counter
*/


// Model

let currency = document.getElementById('currency').value;
let payRate = document.getElementById('pay-rate').value;
let perUnit = document.getElementById('per').value;

let elapsedTime;
let elapsedTimeSec;
let elapsedTimeMin;
let elapsedTimeHr;
let intervalId;
let timerText;

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
    case 'per':
      perUnit = value;
      break;
  }
}

function startTimer() {
  timerText = document.getElementById("time-text");
  console.log(timerText);
  const startTime = Date.now();
  intervalId = setInterval(function () {
    elapsedTime = Date.now() - startTime;

    console.log(elapsedTime);
    // timerText.innerText = elapsedTimeSec;
  }, 10);
}

// Controller

function startCounter() {
  console.log(currency, payRate, perUnit);
  console.log("Start");
  startTimer();
  renderTimer();
}

function stopCounter() {
  clearInterval(intervalId);
}

// View

function renderTimer() {
  setInterval(function () {
    elapsedTimeHr = Math.floor(elapsedTime / (1000 * 60 * 60)) + '';
    elapsedTimeMin = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)) + '';
    elapsedTimeSec = Math.floor((elapsedTime % (1000 * 60)) / 1000) + '';
    timerText.innerText = elapsedTimeHr.padStart(2, '0') + ":" + elapsedTimeMin.padStart(2, '0') + ":" + elapsedTimeSec.padStart(2, '0');
  }, 10);
}

// ChatGPT
// var startBtn = document.getElementById("start-btn");
// var stopBtn = document.getElementById("stop-btn");
// var timerDiv = document.getElementById("time-worked");
// var startTime;
// var intervalId;

// startBtn.addEventListener("click", function () {
//   startTime = Date.now();
//   intervalId = setInterval(function () {
//     var elapsedTime = Date.now() - startTime;
//     var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//     timerDiv.innerHTML = hours + " hours " + minutes + " minutes " + seconds + " seconds";
//   }, 10);
// });

// stopBtn.addEventListener("click", function () {
//   clearInterval(intervalId);
// });