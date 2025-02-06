function solution(my_string, index_list) {
    let tempArr = [];
    
    index_list.forEach(num => {
        tempArr.push(my_string.charAt(num));
    })
    
    return tempArr.join("")
}