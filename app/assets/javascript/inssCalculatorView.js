const inputSalary = document.querySelector("#masked_salary");
const hiddenElement = document.querySelector("#salary");
const inssCalculatorForm = document.querySelector("#inss_calculator_form");

document.getElementById('masked_salary').addEventListener('input', e => TheMask.use(e));

inssCalculatorForm.addEventListener("submit", () => hiddenElement.value = TheMask.unuse(inputSalary.value));
