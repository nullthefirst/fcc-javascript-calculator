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

function parserCore(arithmeticString) {
  const arithBucket = [];

  let numString = '';

  for (let char of arithmeticString) {
    if (symbols.some((el) => el === char)) {
      arithBucket.push(parseDecimals(numString));
      arithBucket.push(char);
      numString = '';
    } else {
      if (numString.charAt(numString.length - 1) === '.' && char === '.') {
        continue;
      } else {
        numString += char;
      }
    }
  }

  arithBucket.push(parseDecimals(numString));

  return arithBucket.join('');
}

module.exports = {
  parserCore: parserCore,
};
