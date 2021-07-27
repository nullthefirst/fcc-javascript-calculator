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

// function parseOperators(symbolString) {
//   let operatorBlock = '';
// }

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
      arithBucket.push(symbolString);
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
  return arr.filter((el) => el !== '');
}

console.log(
  // parseDecimals('3.55.6'),
  parserCore('3..5+/2/-1.5'),
);

module.exports = {
  parserCore: parserCore,
};
