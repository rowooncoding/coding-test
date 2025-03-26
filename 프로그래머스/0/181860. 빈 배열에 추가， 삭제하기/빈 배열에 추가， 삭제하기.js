function solution(arr, flag) {
    let answer = [];
    
    for (let i = 0 ; i < arr.length ; i++) {
        if (flag[i]) {
            answer.push(...Array(arr[i] * 2).fill(arr[i]));
        } else {
            answer = answer.slice(0, -arr[i]);
        }
    }
    
    return answer;
}