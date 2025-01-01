function solution(names) {
    const answer = [];
    
    for (let i = 0 ; i < names.length ; i += 5) {
        // 1. 첫번째는 무조건 넣어
        // 2. 두번째는 index가 += 5 해서 그 애를 넣어
        
        if (i % 5 === 0) {
            answer.push(names[i]);
        }
    }
    
    return answer;
}