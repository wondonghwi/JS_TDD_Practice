const sum = (a, b) => a + b;

const sumOf = (numbers) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

exports.sum = sum;
exports.sumOf = sumOf;
