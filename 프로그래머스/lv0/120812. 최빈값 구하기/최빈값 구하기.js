function solution(array) {
    // 맵 객체 생성
    let map = new Map();
    // 맵 객체 초기화
    for(let i = 0; i <= Math.max(...array); i++){
      map.set(i, 0);    
    }
    // 배열 순환
    array.forEach(num => { 

      if(map.has(num)){
        map.set(num, map.get(num)+1)
          // 초기화 한 맵 객체에 키값이 반복된다면 +1씩 해줌
      }else{
        map.set(num , 1);
      }

    })

    let arr = Array.from(map.values());
    // 객체를 배열로 변환
    const max = Math.max(...map.values());
    // 맵 객체의 벨류값 중에서 가장 큰 값(최빈값)을 찾음
    if(arr.indexOf(max) !== arr.lastIndexOf(max)){
      return -1
    }else {
      return arr.indexOf(max)
    }
    // 최빈값이 중복 된다면 -1 출력
}
