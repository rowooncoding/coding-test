function solution(n) {
  let arr = [];
  let devider = 2;
  while (n >= 2) {
    if (n % devider === 0) {
      arr.push(devider);
      n = n / devider;
    } else {
      devider++;
    }
  }
  return [...new Set(arr)];
}
