function solution(my_string, queries) {
    const arr = my_string.split("");
    
    queries.forEach(([x, y]) => {
        const reversedPart = arr.slice(x, y + 1).reverse();
        
        arr.splice(x, reversedPart.length, ...reversedPart);
    });
    
    return arr.join("");
}