function solution(array) {
  let maxNum = Math.max(...array);
  let idx = array.indexOf(Math.max(...array));
  let answer = [maxNum, idx];
  return answer;
}