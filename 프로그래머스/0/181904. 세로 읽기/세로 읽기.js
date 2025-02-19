function solution(my_string, m, c) {
    let answer = ''
    const array = my_string.split('');
    
    while (array.length > 0) {
        let result = (array.splice(0, m));
        answer += result[c - 1];
    }
    
    return answer;
}