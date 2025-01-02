function solution(start_num, end_num) {
    const answer = [];
    
    const array = Array(Math.abs(start_num - end_num) + 1).fill(start_num);
    
    let initNum = 0
    for (let item of array) {
        answer.push(item - initNum);
        initNum++;
    }
    
    return answer
}