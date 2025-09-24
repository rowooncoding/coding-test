import math

def count_divisors(n):
    count = 0
    sqrt_n = int(math.sqrt(n))
    
    for i in range(1, sqrt_n + 1):
        if n % i == 0:
            count += 1
            
            if i != n // i:
                count += 1
            
    return count

def solution(number, limit, power):
    total = 0
    
    for i in range(1, number + 1):
        divisor_count = count_divisors(i)
        
        if divisor_count > limit:
            total += power
        else:
            total += divisor_count
            
    return total