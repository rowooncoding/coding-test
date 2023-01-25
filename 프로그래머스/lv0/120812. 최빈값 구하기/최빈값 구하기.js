function solution(array) {
    let map = new Map();

    for(let i = 0; i <= Math.max(...array); i++){
      map.set(i, 0);    
    }

    array.forEach(num => { 

      if(map.has(num)){
        map.set(num, map.get(num)+1)
      }else{
        map.set(num , 1);
      }

    })

    let arr = Array.from(map.values());
    const max = Math.max(...map.values());

    if(arr.indexOf(max) !== arr.lastIndexOf(max)){
      return -1
    }else {
      return arr.indexOf(max)
    }
}