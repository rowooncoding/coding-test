function solution(cipher, code) {
  let arr = [];

  let strArr = cipher.split("");
  for (let i = code - 1; i <= strArr.length; i += code) {
    arr.push(strArr[i]);
  }
  let result = arr.join("");
  return result;
}