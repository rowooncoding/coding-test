function solution(my_string) {
    const answer = [];
    
    for (let i = 0 ; i < my_string.length ; i++) {
        let sliceStr = my_string.slice(i);
        answer.push(sliceStr);
    }
    
    return answer.sort();
}