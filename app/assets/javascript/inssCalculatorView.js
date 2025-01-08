let inputSalary = document.querySelector("#masked_salary");
let masker = new VMasker(inputSalary);
let hiddenElement = document.querySelector("#salary");
let inssCalculatorForm = document.querySelector("#inss_calculator_form");

document.getElementById('masked_salary').addEventListener('input', function(e) {
  new TheMask(e).use();
});

inssCalculatorForm.addEventListener("submit", (event) =>{
  let inputSalary = document.querySelector("#masked_salary");
  let masker = new VMasker(inputSalary);
  hiddenElement.value = parseFloat(VMasker.toNumber(inputSalary.value))/100
});
