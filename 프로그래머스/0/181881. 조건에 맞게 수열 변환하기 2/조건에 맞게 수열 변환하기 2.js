function solution(arr) {
    let count = 0;

    while (true) {
        let changed = false; // 변경 여부 확인
        let newArr = arr.map(num => {
            if (num >= 50 && num % 2 === 0) return num / 2;
            if (num < 50 && num % 2 !== 0) return num * 2 + 1;
            return num;
        });

        // 이전 배열과 동일한지 확인 (배열 요소를 개별적으로 비교)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== newArr[i]) {
                changed = true;
                break;
            }
        }

        if (!changed) return count; // 변경이 없으면 count 반환

        arr = newArr; // 업데이트된 배열로 교체
        count++;
    }
}