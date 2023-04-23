function solution(my_string) {
  let arr = my_string.split("");
  let result = Array.from(new Set(arr));

  return result.join("");
}