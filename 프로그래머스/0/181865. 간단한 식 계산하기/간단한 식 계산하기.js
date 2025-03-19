function solution(binomial) {
    const splitArr = binomial.split(" ");
    
    for (let i = 0 ; i < splitArr.length ; i++) {
        if (splitArr[i] === "+") {
            return Number(splitArr[0]) + Number(splitArr[2])
        } else if (splitArr[i] === "-") {
            return Number(splitArr[0]) - Number(splitArr[2])
        } else if (splitArr[i] === "*") {
            return Number(splitArr[0]) * Number(splitArr[2])
        }
    }
}