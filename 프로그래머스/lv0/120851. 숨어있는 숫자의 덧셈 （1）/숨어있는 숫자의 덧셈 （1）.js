function solution(my_string) {
  let newArr = my_string.split("");
  let numberArr = newArr.filter((el) => el < 100);
  let arr = numberArr.map(Number);
  let result = arr.reduce((a, b) => a + b);
  return result;
}