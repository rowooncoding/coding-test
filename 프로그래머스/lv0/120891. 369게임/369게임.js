function solution(order) {
  let str = String(order);

  let arr = Array.from(str);

  let numArr = arr.map((el) => Number(el));

  let count = 0;
  for (let i = 0; i <= numArr.length; i++) {
    if (numArr[i] === 3 || numArr[i] === 6 || numArr[i] === 9) {
      count += 1;
    }
  }

  return count;
}