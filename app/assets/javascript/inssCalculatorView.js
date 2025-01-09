let inputSalary = document.querySelector("#masked_salary");
let hiddenElement = document.querySelector("#salary");
let inssCalculatorForm = document.querySelector("#inss_calculator_form");

document.getElementById('masked_salary').addEventListener('input', function(e) {
  TheMask.use(e);
});

inssCalculatorForm.addEventListener("submit", (event) =>{
  let inputSalary = document.querySelector("#masked_salary");
  let masker = new VMasker(inputSalary);
  debugger
  hiddenElement.value = TheMask.unuse(inputSalary.value);
});
