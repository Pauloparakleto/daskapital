class TheMask {
  static use(event){
    let input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    let cursorPosition = input.selectionStart;
    let oldValueLength = input.value.length;

    value = (value / 100).toFixed(2) + '';
    value = value.replace(".", ",");
    value = value.replace(/(\d)(?=(\d{3})+\,)/g, '$1.')

    input.value = value;
    let newValueLength = input.value.length;

    // Adjust cursor position to stay in the same relative place
    cursorPosition = Math.max(cursorPosition + (newValueLength - oldValueLength), 0);
    input.setSelectionRange(cursorPosition, cursorPosition);
  }

  static unuse(maskedNumber){
    maskedNumber = maskedNumber.replace(".", "").replace(",", ".");
    return parseFloat(maskedNumber);
  }
}
