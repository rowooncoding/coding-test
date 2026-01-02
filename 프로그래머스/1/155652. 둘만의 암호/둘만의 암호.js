function solution(s, skip, index) {
    let skipSet = new Set(skip);
    let answer = '';
    
    for (const ch of s) {
        let cur = ch.charCodeAt(0) - 97;
        let moved = 0;
        
        while (moved < index) {
            cur = (cur + 1) % 26;
            let nextChar = String.fromCharCode(cur + 97);
            
            if (!skipSet.has(nextChar)) {
                moved ++;
            }
        }
        
        answer += String.fromCharCode(cur + 97);
    }
    
    return answer;
}