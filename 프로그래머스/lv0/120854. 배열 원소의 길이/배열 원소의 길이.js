function solution(strlist) {
  let answer = [];
  strlist.map((el) => {
    let num = el.length;
    answer.push(num);
  });
  return answer;
}