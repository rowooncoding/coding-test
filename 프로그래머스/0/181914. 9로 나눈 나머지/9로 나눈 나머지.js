function solution(number) {
    const arr = number.split("");
    
    const resultNumber = arr.reduce((acc, cur) => Number(acc) + Number(cur), 0);

    return resultNumber % 9
}