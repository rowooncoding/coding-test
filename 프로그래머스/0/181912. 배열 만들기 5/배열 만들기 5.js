function solution(intStrs, k, s, l) {
    const answer = [];
    
    for (let str of intStrs) {
        const filteredNum = Number(str.slice(s, s + l));
        
        if (filteredNum > k) {
            answer.push(filteredNum);
        } else {
            continue;
        }
    }
    
    return answer;
}