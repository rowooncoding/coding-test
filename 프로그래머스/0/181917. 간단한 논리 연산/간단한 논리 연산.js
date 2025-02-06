function solution(x1, x2, x3, x4) {
    let firstBoolean;
    let secondBoolean;
    let answer;
    
    if (x1 === false && x2 === false) {
        firstBoolean = false;
    } else {
        firstBoolean = true;
    }
    
    if (x3 === false && x4 === false) {
        secondBoolean = false;
    } else {
        secondBoolean = true;
    }
    
    if (firstBoolean === true && secondBoolean === true) {
        return true;
    } else {
        return false;
    }
}