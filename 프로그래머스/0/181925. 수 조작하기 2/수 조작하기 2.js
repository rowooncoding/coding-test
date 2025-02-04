function solution(numLog) {
    const result = [];
    let prevNum = 0;
    
    for (let num of numLog) {
        if (prevNum + 1 === num) {
            result.push('w')
        } else if (prevNum - 1 === num) {
            result.push('s')
        } else if (prevNum + 10 === num) {
            result.push('d')
        } else if (prevNum - 10 === num) {
            result.push('a')
        }
        
        prevNum = num;
    }
    
    return result.join("");
}