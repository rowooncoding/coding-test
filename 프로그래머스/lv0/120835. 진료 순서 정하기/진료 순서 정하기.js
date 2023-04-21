function solution(emergency) {
  let sortArr = [...emergency].sort((a, b) => b - a);
  let result = emergency.map((el) => sortArr.indexOf(el) + 1);
  return result;
}