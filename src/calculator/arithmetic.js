function parseDecimals(numString) {
  let arr = [];

  for (let char of numString) {
    if (arr.some((el) => el === '.') && char === '.') {
      continue;
    } else {
      arr.push(char);
    }
  }

  return arr.join('');
}

function parserCore(arithmeticString) {
  const arithBucket = [];

  let numString = '';

  const symbols = ['+', '-', '/', '*'];

  for (let char of arithmeticString) {
    if (symbols.some((el) => el === char)) {
      arithBucket.push(numString);
      arithBucket.push(char);
      numString = '';
    } else {
      numString += char;
    }
  }

  arithBucket.push(numString);

  return arithBucket;
}

console.log(parserCore('3.5+1.5'));

module.exports = {
  parserCore: parserCore,
  parseDecimals: parseDecimals,
};
