document.addEventListener('DOMContentLoaded', () => {
  const inputSalary = document.querySelector("#masked_salary");
  const hiddenElement = document.querySelector("#salary");
  const inssCalculatorForm = document.querySelector("#inss_calculator_form");

  inputSalary.addEventListener('input', e => {
    const cursorPosition = e.target.selectionStart;
    const oldValueLength = e.target.value.length;
    const formattedValue = TheMask.use(e.target.value);
    e.target.value = formattedValue;

    // Adjust cursor position to stay in the same relative place
    const newValueLength = e.target.value.length;
    const newCursorPosition = Math.max(cursorPosition + (newValueLength - oldValueLength), 0);
    e.target.setSelectionRange(newCursorPosition, newCursorPosition);
  });

  inssCalculatorForm.addEventListener("submit", () => {
    hiddenElement.value = TheMask.unuse(inputSalary.value);
  });
});
