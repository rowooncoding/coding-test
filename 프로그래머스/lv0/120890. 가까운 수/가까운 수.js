function solution(array, n) {
  let arr = [];
  array.forEach((el) => arr.push(Math.abs(el - n)));

  const minNumber = Math.min(...arr);

  let resultArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === minNumber) {
      resultArr.push(array[i]);
    }
  }
  return Math.min(...resultArr);
}