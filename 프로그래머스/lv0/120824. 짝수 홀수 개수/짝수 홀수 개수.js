function solution(num_list) {
  let arr = [0, 0];
  for (let a of num_list) {
    arr[a % 2] += 1;
  }
  return arr;
}
