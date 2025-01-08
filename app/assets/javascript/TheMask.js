/*
 TheMask, is The Money Mask
 "Somebody Stop me!"

 Give me the input event and use it like this:

 TheMask.use(event) => 1.000,00

 The backend (client) needs the number version?
 TheMask.unuse(maskedValue) => 1000.0
 To remove the mask, the argument is literally the masked value,
 not the document component. In your view, use TheMask.unuse(component.value)
*/
class TheMask {
  static use(value) {
    value = value.replace(/\D/g, ''); // Remove non-numeric characters
    value = (value / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.');
    return value;
  }

  static unuse(maskedValue) {
    return parseFloat(maskedValue.replace(/\./g, '').replace(',', '.'));
  }
}
