function solution(num_list) {
  let newArr = [];
  while (num_list.length !== 0) {
    let number = num_list.pop();
    newArr.push(number);
  }
  return newArr;
}