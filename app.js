// Model

let currency = document.getElementById('currency').value;
let payRate = document.getElementById('pay-rate').value;
let perUnit = document.getElementById('per').value;

// Controller

function handleChange(e) {
  let value = e.target.value;
  let targetId = e.target.getAttribute('id');

  updateValue(value, targetId);
}

function updateValue(value, targetId) {
  switch(targetId) {
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

function startCounter() {
  console.log(currency, payRate, perUnit);
  console.log("Start");
}

// View