//최대값 구하기
exports.max = numbers => Math.max(...numbers);
//최소값 구하기
exports.min = numbers => Math.min(...numbers);
//평균값 구하기
exports.avg = numbers => {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
};
//정렬
//Todo 문자열 대신 숫자를 비교하기 위해 a에서 b를 뺄 수 있습니다. 다음 함수는 배열을 오름차순으로 정렬합니다
exports.sort = numbers => numbers.sort((a, b) => a - b);
//중앙값 구하기
exports.median = numbers => {
  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2) {
    //홀수
    return numbers[middle]
  }
  //짝수
  return (numbers[middle - 1] + numbers[middle]) / 2
};

//최빈값 구하기
exports.mode = numbers => {
  const counts = new Map();
  numbers.forEach(n => {
    const count = counts.get(n) || 0;
    counts.set(n, count + 1);
  });
  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    number => counts.get(number) === maxCount
  );
  if (modes.length === numbers.length) {
    //최빈값이 없음
    return null;
  }
  if (modes.length > 1) {
    //최빈값이 여러개
    return modes;
  }
  return modes[0];
}
