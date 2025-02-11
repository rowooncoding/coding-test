function solution(my_strings, parts) {
    let answer = "";
    
    for (let i = 0 ; i < parts.length ; i++) {
        const [s, e] = parts[i];
        
        let sliceString = my_strings[i].slice(s, e + 1);
        
        answer += sliceString;
    }
    
    return answer;
}