function solution(arr, idx) {
    return arr.findIndex((val, i) => i >= idx && val === 1);
}