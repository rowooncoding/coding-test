function solution(my_string, is_suffix) {
    let answer = 0;
    
    for (let i = 0 ; i < my_string.length ; i++) {
        const sliceStr = my_string.slice(i);
        
        if (sliceStr === is_suffix) {
            answer = 1;
            break;
        } else {
            answer = 0;
        }
    }
    
    return answer;
}