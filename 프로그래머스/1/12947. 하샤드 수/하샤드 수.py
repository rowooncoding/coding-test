def solution(x):    
    sum_num = sum(list(map(int, str(x))))
    
    if (x % sum_num != 0):
        return False
    
    return True