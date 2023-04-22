function solution(box, n) {
  let low = Math.floor(box[0] / n);
  let column = Math.floor(box[1] / n);
  let height = Math.floor(box[2] / n);

  return low * column * height;
}