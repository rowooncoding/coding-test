function solution(n) {
  let str = String(n);
  let arr = [...str];
  let num = 0;
  arr.map((el) => {
    num += Number(el);
    return;
  });
  return num;
}