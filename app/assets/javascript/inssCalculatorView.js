document.addEventListener('DOMContentLoaded', () => {
  const inputSalary = document.querySelector("#masked_salary");
  const hiddenElement = document.querySelector("#salary");
  const inssCalculatorForm = document.querySelector("#inss_calculator_form");
  const alertMessage = document.querySelector("#input-salary-alert");

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

  inssCalculatorForm.addEventListener("submit", (event) => {
    hiddenElement.value = TheMask.unuse(inputSalary.value);
    if (parseFloat(hiddenElement.value) < 1412) {
      alertMessage.innerHTML = `<p class="text-success fs-6">Igual ou maior do que R$ 1412,00</p>`;

      event.preventDefault();
    }
  });
});
