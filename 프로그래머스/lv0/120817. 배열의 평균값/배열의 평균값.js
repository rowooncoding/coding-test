function solution(numbers) {
    let add = 0
    numbers.forEach((number) => {
        add += number   
    })
    let result = add / numbers.length
    return result
}
