import math

def solution(n):
    if n < 0 :
        return -1
    
    sqrt_n = math.sqrt(n)
    
    if (sqrt_n.is_integer()) :
        x = int(sqrt_n)
        return (x + 1) ** 2
    else :
        return -1