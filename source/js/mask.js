const maskedInputs = document.querySelectorAll('[data-mask]');

const maskInput = (e) => {
  const input = e.target;
  const mask = input.dataset.mask;
  const value = input.value;
  const literalPattern = /[0*]/;
  const numberPattern = /[0-9]/;
  let newValue = '';
  const maskLength = mask.length;
  let valueIndex = 0;
  let maskIndex = 0;

  for (; maskIndex < maskLength;) {
    if (maskIndex >= value.length){
      break;
    }

    if (mask[maskIndex] === '0' && value[valueIndex].match(numberPattern) === null){
      break;
    }

    // Found a literal
    while (mask[maskIndex].match(literalPattern) === null) {
      if (value[valueIndex] === mask[maskIndex]) {
        break;
      }
      newValue += mask[maskIndex++];
    }
    newValue += value[valueIndex++];
    maskIndex++;
  }

  input.value = newValue;
};

for (let index = 0; index < maskedInputs.length; index++) {
  maskedInputs[index].addEventListener('input', maskInput);
  maskedInputs[index].addEventListener('focus', maskInput);
}
