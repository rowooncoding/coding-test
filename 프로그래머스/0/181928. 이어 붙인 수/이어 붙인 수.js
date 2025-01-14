function solution(num_list) {
    const resultEvenNumber = num_list.filter(num => num % 2 === 0).join('');
    const resultOddNumber = num_list.filter(num => num % 2 === 1).join('');
    
    const sum = Number(resultEvenNumber) + Number(resultOddNumber);
    
    return sum;
}