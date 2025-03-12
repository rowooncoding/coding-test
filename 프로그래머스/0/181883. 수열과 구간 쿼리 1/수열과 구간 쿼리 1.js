function solution(arr, queries) {
    queries.forEach(([x, y]) => {
        for (let i = 0 ; i < arr.length ; i++) {
            if (x <= i && i <= y) {
                arr[i] += 1;
            }   
        }
    })
    
    return arr;
}