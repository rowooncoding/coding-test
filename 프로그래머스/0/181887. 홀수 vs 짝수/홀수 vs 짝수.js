function solution(num_list) {
    let sumOfOddNumber = 0;
    let sumOfEvenNumber = 0;
    
    for (let i = 1 ; i <= num_list.length ; i++) {
        if (i % 2 === 0) {
            sumOfEvenNumber += num_list[i - 1];
        } else {
            sumOfOddNumber += num_list[i - 1];
        }
    }
    
    return sumOfOddNumber > sumOfEvenNumber ? sumOfOddNumber : sumOfEvenNumber
}