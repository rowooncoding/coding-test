function solution(numbers, direction) {
  if (direction === "right") {
    let a = numbers.pop();
    numbers.unshift(a);
  } else if (direction === "left") {
    let b = numbers.shift();
    numbers.push(b);
  }
  return numbers;
}