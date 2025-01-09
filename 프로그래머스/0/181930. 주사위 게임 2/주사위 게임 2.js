function solution(a, b, c) {
    if (a !== b && a !== c && b !== c) { // 모두 다른 경우
        return a + b + c
    } else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) { // 세 숫자중에 어느 두 숫자만 일치하는 경우
        return (a + b + c) * (a**2 + b**2 + c **2)
    } else { // 세 숫자가 모두 같은 경우
        return (a + b + c) * (a**2 + b**2 + c **2) * ((a**3 + b**3 + c **3))
    }
}