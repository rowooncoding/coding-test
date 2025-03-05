function solution(my_string) {
    const alphabetCount = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']
        .reduce((acc, char) => {
            acc[char] = 0;
            return acc;
        }, {});
    
    for (let char of my_string) {
        if (alphabetCount.hasOwnProperty(char)) {
            alphabetCount[char] += 1;
        }
    }
    
    return Object.values(alphabetCount);
}