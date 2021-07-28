const symbols = ['+', '-', '/', '*'];

function parseDecimals(numberString) {
  let cleanedNumber = '';

  for (let char of numberString) {
    if (cleanedNumber.includes('.') && char === '.') {
      continue;
    } else {
      cleanedNumber += char;
    }
  }

  return cleanedNumber;
}

function parseOperators(symbolString) {
  let operatorBucket = [];
  let operatorBlock = '';

  for (let char of symbolString) {
    operatorBucket.push(char);
  }

  if (operatorBucket[operatorBucket.length - 1] !== '-') {
    operatorBlock += operatorBucket[operatorBucket.length - 1];
  } else if (
    operatorBucket.includes(operatorBucket[operatorBucket.length - 2])
  ) {
    operatorBlock += operatorBucket[operatorBucket.length - 2];
    operatorBlock += operatorBucket[operatorBucket.length - 1];
  } else {
    operatorBlock += operatorBucket[operatorBucket.length - 1];
  }

  return operatorBlock;
}

function parserCore(arithmeticString) {
  const arithBucket = [];

  let numString = '';
  let symbolString = '';

  for (let char of arithmeticString) {
    if (symbols.some((el) => el === char)) {
      arithBucket.push(parseDecimals(numString));
      numString = '';

      symbolString += char;
    } else {
      arithBucket.push(parseOperators(symbolString));
      symbolString = '';

      if (numString.charAt(numString.length - 1) === '.' && char === '.') {
        continue;
      } else {
        numString += char;
      }
    }
  }

  arithBucket.push(parseDecimals(numString));
  arithBucket.push(parseOperators(symbolString));

  return cleanArray(arithBucket).join('');
}

function cleanExpression(expressionInput) {
  const expressionInputArray = expressionInput.split('');

  function hangingOperatorRemoval(arr) {
    while (symbols.includes(arr[arr.length - 1])) {
      arr.pop();
    }
    return arr;
  }

  const expressionOutput = hangingOperatorRemoval(expressionInputArray);

  const cleanedExpression = cleanArray(expressionOutput).join('');

  return cleanedExpression;
}

function cleanArray(arr) {
  return arr.filter((el) => el !== '' && el !== 'undefined');
}

const arithmetic = {
  parserCore: parserCore,
  cleanExpression: cleanExpression,
};

export default arithmetic;
