/*
n : 정수
slicer: 정수 3개가 담김 a , b , c
num_list : 정수 여러개 담김

n의 번호에 따라서 특정 조건으로 num_list의 정수를 잘라내야함
*/

function solution(n, slicer, num_list) {
    let result;
    switch(n) {
        case 1:
            result = num_list.slice(0, slicer[1] + 1);
            break;
        case 2:
            result = num_list.slice(slicer[0]);
            break;
        case 3:
            result = num_list.slice(slicer[0], slicer[1] + 1);
            break;
        case 4:
            result = num_list.slice(slicer[0], slicer[1] + 1).filter((_, index) => index % slicer[2] === 0);
            break;
        default:
            break;
    }
    
    return result;
}