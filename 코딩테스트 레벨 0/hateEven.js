function solution(n) {
  let answer = []
  
  for(let i = 1 ; i <= n ; i++){
      if(i % 2 === 1) {
          answer.push(i);
      }
  }
  return answer;
}

/*
1. 빈 배열 생성
2. 반복문 생성
  2-1. 조건문생성
    2-1-1. i 나누기 2의 나머지가 1 이라면(i 가 홀수라면)
    2-1-2. 빈 배열에 push
3. 추출
*/