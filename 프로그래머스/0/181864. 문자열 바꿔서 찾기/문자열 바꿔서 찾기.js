function solution(myString, pat) {
    // A랑 B랑 바꾸기
    const filteredStr = myString.split("").map(el => el === 'A' ? el = 'B' : 'A').join("").includes(pat);
    
    return filteredStr ? 1 : 0;
}