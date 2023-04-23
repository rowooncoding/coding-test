function solution(sides) {
  let arr = sides.sort((a, b) => a - b);
  let long = arr.pop();
  let addNum = arr.reduce((acc, cur) => acc + cur);
  if (long < addNum) {
    return 1;
  } else {
    return 2;
  }
}