function solution(arr, queries) {
    
    queries.forEach(([i, j]) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // 올바른 값 교환
    });
    
    return arr;
}