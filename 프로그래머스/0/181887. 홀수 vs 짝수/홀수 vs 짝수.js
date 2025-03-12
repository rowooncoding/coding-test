function solution(num_list) {
    let sumOfOddNumber = 0;
    let sumOfEvenNumber = 0;
    
    num_list.map((num, index) => {
        index % 2 === 0 ? sumOfEvenNumber += num : sumOfOddNumber += num;
    })
     
    return sumOfOddNumber > sumOfEvenNumber ? sumOfOddNumber : sumOfEvenNumber
}