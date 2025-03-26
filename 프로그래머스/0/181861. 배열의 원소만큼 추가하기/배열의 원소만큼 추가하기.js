function solution(arr) {
    return arr.map(el => Array(el).fill(el)).flat()
}