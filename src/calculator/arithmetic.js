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
  } else {
    operatorBlock += operatorBucket[operatorBucket.length - 2];
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

  // return arithBucket.join('');
  return cleanArray(arithBucket);
}

function cleanArray(arr) {
  return arr.filter((el) => el !== '' && el !== 'undefined');
}

// console.log(parserCore('3..5+/2/-1.5'));
console.log(parserCore('3..5+--/-2'));

module.exports = {
  parserCore: parserCore,
};
