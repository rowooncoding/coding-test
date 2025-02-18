function solution(my_string, is_prefix) {
    let answer = 0;
    const strLength = is_prefix.length;
    const slicedStr = my_string.slice(0, strLength);
    
    if (is_prefix !== slicedStr) {
        answer = 0;
    } else {
        answer = 1;
    }
    
    return answer;
}