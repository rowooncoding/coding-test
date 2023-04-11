function solution(my_string) {
  let newArr = [];
  let arrString = [...my_string];
  while (arrString.length !== 0) {
    let strings = arrString.pop();
    newArr.push(strings);
  }
  let newString = newArr.join("");
  return newString;
}