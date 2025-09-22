def solution(a, b, n):
    answer = 0
    empty_bottles = n
    
    while empty_bottles >= a:
        exchange = empty_bottles // a
        
        new_colas = exchange * b
        answer += new_colas
        
        remaining_bottels = empty_bottles % a
        new_empty_bottles = new_colas
        
        empty_bottles = remaining_bottels + new_empty_bottles
        
    
    return answer