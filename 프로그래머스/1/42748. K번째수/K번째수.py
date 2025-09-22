def solution(array, commands):
    answer = []
    
    for arr in commands:
        i, j, k = arr
        
        sorted_array = sorted(array[i-1:j])
        answer.append(sorted_array[k-1])
    
    return answer