function solution(denum1, num1, denum2, num2) {
  // 분자
  let topNum = num1*denum2 + num2*denum1
  // 분모
  let botNum = num1*num2
  // 최소 공배수
  let maximum = 1
  // 약분
  for(let i = 1 ; i <= topNum ; i ++) {
      if(topNum%i === 0 && botNum%i === 0) {
          maximum = i
      }
  }
  return [topNum/maximum, botNum/maximum]
}

/*
1. 분자의 덧셈과 분모의 덧셈을 각각의 변수에 담는다
2. 최소 공배수를 구한다
2-1. 1부터 숫자를 1씩 더해가면서 분자와 분모의 나머지가 0이되면, 즉 나누어 떨어지면 그 수는 최소 공배수이다
2-2. 최소 공배수를 i에 담는다
3. 배열로 출력한다
*/