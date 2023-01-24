// 피자 나눠먹기 1
function solution(n) {
  if(n%7 === 0){
      return n/7
  }else {
      return Math.floor(n/7)+1
  }    
}

/* 
1. 조건문 작성
  1-1. n을 7로 나누었을때 나머지가 0이라면
    1-1-1. n/7을 추출
  1-2. 그렇지 않다면(나머지가 0이 아니라면)
    1-2-1. n/7을 하고 + 1을 해준다
*/