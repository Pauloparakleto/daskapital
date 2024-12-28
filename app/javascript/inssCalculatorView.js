const element = document.querySelector("#salary");

IMask(element, {
  mask: Number,  // enable number mask

  // other options are optional with defaults below
  scale: 2,  // digits after point, 0 for integers
  thousandsSeparator: ' ',  // any single char
  padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
  normalizeZeros: true,  // appends or removes zeros at ends
  radix: ',',  // fractional delimiter
  mapToRadix: ['.'],  // symbols to process as radix

  // additional number interval options (e.g.)
  min: 0,
  max: 1000000000,
  autofix: true,
})
