function solution(n, numlist) {
  let arr = [];
  numlist.forEach((el) => {
    if (el % n === 0) {
      arr.push(el);
    }
    return;
  });
  return arr;
}