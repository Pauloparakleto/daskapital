let inputSalary = document.querySelector("#masked_salary");
let masker = new VMasker(inputSalary);
let hiddenElement = document.querySelector("#salary");
let inssCalculatorForm = document.querySelector("#inss_calculator_form");

document.getElementById('masked_salary').addEventListener('input', function(e) {
            let input = e.target;
            let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
            let cursorPosition = input.selectionStart;
            let oldValueLength = input.value.length;

            // Update value and cursor position accordingly
            value = (value / 100).toFixed(2) + ''; // Divide by 100 to get cents and convert to string
            value = value.replace(".", ","); // Replace decimal point with a comma
            value = value.replace(/(\d)(?=(\d{3})+\,)/g, '$1.'); // Add thousand separators

            input.value = value;
            let newValueLength = input.value.length;

            // Adjust cursor position to stay in the same relative place
            cursorPosition = Math.max(cursorPosition + (newValueLength - oldValueLength), 0);
            input.setSelectionRange(cursorPosition, cursorPosition);
        });

inssCalculatorForm.addEventListener("submit", (event) =>{
  let inputSalary = document.querySelector("#masked_salary");
  let masker = new VMasker(inputSalary);
  hiddenElement.value = parseFloat(VMasker.toNumber(inputSalary.value))/100
});
