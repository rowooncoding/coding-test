function solution(num_list) {
    let count = 0;
    
    for (let num of num_list) {
        while (true) {
            if (num === 1) {
                break;
            } else if (num % 2 === 0) {
                num = num / 2
                count++;
            } else {
                num = (num - 1) / 2
                count++;
            }
        }
    }
    
    return count;
}