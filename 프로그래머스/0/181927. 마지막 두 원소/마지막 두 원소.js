function solution(num_list) {
    let lastEl;
	let secondEl;
    
    for (let i = 0 ; i < num_list.length ; i++) {
        if (num_list[i] === num_list[num_list.length-1]) {
            lastEl = num_list[i]
        } else if (num_list[i] === num_list[num_list.length-2]) {
            secondEl = num_list[i]
        }
    }
    
    if (lastEl > secondEl) {
        num_list.push(lastEl - secondEl)
    } else {
        num_list.push(lastEl * 2)
    }

    return num_list
}