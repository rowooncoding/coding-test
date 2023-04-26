function solution(s) {
  let arr = [...s];
  let result = [];
  arr.forEach((item) => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      result.push(item);
    }
  });
  return result.sort().join("");
}