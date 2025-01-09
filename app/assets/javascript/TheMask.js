class TheMask {
  static use(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    const oldCursorPos = input.selectionStart;
    const oldValueLength = input.value.length;

    value = (value / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.');
    input.value = value;
    
    const newValueLength = input.value.length;
    const newCursorPos = Math.max(oldCursorPos + (newValueLength - oldValueLength), 0);
    input.setSelectionRange(newCursorPos, newCursorPos); // Adjust cursor position
  }

  static unuse(maskedValue) {
    return parseFloat(maskedValue.replace('.', '').replace(',', '.'));
  }
}

