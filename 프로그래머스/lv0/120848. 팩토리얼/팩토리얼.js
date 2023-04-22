function solution(n) {
  for (let i = 1; i <= n; i++) {
    let factorialNum = getFactorial(i);
    console.log(factorialNum);
    if (factorialNum > n) {
      return i - 1;
    } else if (factorialNum === n) {
      return i;
    }
  }
}

function getFactorial(num) {
  let returnFactorial = 1;
  for (let j = num; j >= 1; j--) {
    returnFactorial *= j;
  }
  return returnFactorial;
}