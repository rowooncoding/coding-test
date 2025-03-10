function solution(arr, intervals) {    
    const [[a, b], [c, d]] = intervals;
    
    const slicedArr1 = arr.slice(a, b + 1);
    const slicedArr2 = arr.slice(c, d + 1);
    
    return [...slicedArr1, ...slicedArr2];
}