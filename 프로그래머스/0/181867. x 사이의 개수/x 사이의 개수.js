function solution(myString) {
    const splitArr = myString.split("x");
    
    return splitArr.map(el => el.length);
}