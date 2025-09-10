def decimal_to_tenary(n):
    if n == 0:
        return '0';
    
    result = ""
    while n > 0:
        remainder = n % 3
        result = str(remainder) + result
        n = n // 3

    return result

def solution(n):
    result = decimal_to_tenary(n)
    
    return int(result[::-1], 3)