function solution(arr) {
    const answer = [];
    
    for (let num of arr) {
        for (let i = 0 ; i < num ; i++) {
            answer.push(num);
        }
    }
    
    return answer;
}