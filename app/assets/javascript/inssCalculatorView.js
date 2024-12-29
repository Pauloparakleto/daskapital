let inputSalary = document.querySelector("#masked_salary");
let masker = new VMasker(inputSalary);
let hiddenElement = document.querySelector("#salary");
let inssCalculatorForm = document.querySelector("#inss_calculator_form");
masker.maskMoney();

inssCalculatorForm.addEventListener("submit", (event) =>{
  let inputSalary = document.querySelector("#masked_salary");
  let masker = new VMasker(inputSalary);
  console.log(masker.unMask());
  hiddenElement.value = hiddenElement.value = parseFloat(VMasker.toNumber(inputSalary.value))/100
});
