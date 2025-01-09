function solution(num_list) {
    const a = num_list.reduce((acc, cur) => acc * cur, 1);
    const b = (num_list.reduce((acc, cur) => acc + cur, 0)) ** 2;
    
    if (a < b) {
        return 1;
    } else if (a > b) {
        return 0;
    }
}