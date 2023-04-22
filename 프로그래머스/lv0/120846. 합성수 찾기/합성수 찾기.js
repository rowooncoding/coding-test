function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (checkNum(i)) {
      count += 1;
    }
  }
  return count;
}

function checkNum(num) {
  let a = false;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      a = true;
    }
  }
  return a;
}
