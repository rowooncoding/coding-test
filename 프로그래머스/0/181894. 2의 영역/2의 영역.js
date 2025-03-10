function solution(arr) {
    if (!arr.includes(2)) {
        return [-1]
    }
    
    const firstIndex = arr.findIndex(num => num === 2);
    const lastIndex = arr.lastIndexOf(2);
    
    return arr.slice(firstIndex, lastIndex + 1);
}