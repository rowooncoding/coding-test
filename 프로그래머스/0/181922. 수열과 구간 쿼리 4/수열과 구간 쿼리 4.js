function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        for (i = s; i <= e; i++) {
            if (i % k === 0) arr[i]++
        }
    })

    return arr;
}