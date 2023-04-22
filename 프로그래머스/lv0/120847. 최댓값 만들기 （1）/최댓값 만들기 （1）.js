function solution(numbers) {
  let newArr = numbers.sort((a, b) => a - b);
  let a = newArr.pop();
  let b = newArr.pop();
  return a * b;
}