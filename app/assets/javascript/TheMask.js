const TheMask = function (event) {
  this.event = event;
};

TheMask.prototype.use = function () {
  console.log("using the mask");

  let input = this.event.target;
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
};
