let result = document.getElementById('result');

function clearDisplay() {
  result.value = '0';
}

function appendCharacter(char) {
  if (result.value === '0') {
    result.value = char;
  } else {
    result.value += char;
  }
}

function toggleSign() {
  if (result.value !== '0') {
    if (result.value[0] === '-') {
      result.value = result.value.slice(1);
    } else {
      result.value = '-' + result.value;
    }
  }
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
