function solution(myString, pat) {
    // pat의 길이가 myString보다 길면 무조건 0리턴
    if (pat.length > myString.length) return 0;
    
    let a = myString.toUpperCase();
    let b = pat.toUpperCase();
    
    return a.includes(b) ? 1 : 0;
}