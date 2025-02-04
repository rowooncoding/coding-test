function solution(arr, queries) {
    const answer = [];
    
    queries.forEach(([s, e, k]) => {
       let result = arr
            .filter((v, i) => (i >= s && i <= e && v > k))
            .sort(((a, b) => a - b))[0];
        
       answer.push(result ? result : -1);
    });
    
    return answer
}