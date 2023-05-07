window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    year: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 5000, year: 3, rate: 4.5}
  const amount = document.getElementById('loan-amount');
  amount.value = values.amount;
  const loanYear = document.getElementById('loan-years');
  loanYear.value = values.year;
  const loanRate = document.getElementById('loan-rate')
  loanRate.value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  console.log(currentValues, 'currentValues')
  const monthlyPayment = calculateMonthlyPayment(currentValues);
  console.log(monthlyPayment, 'mpayment')
  updateMonthly(monthlyPayment)

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(value) {
  // const {amount, year, rate} = values;
  let interest = (value.rate / 100) / 12
  let numOfPayment = Math.floor(value.year * 12);
  const monthlyPayment = (value.amount * interest) / (1 - Math.pow(1 + interest, -numOfPayment))
  return monthlyPayment.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.textContent = `$ ${monthly}`
}
