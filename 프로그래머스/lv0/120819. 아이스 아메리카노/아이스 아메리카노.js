function solution(money) {
    let iceAmericano = 5500;
    let a = Math.floor(money/iceAmericano);
    let b = Math.floor(money%iceAmericano)
    return [a , b];
}