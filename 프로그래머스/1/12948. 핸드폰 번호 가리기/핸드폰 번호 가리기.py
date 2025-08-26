def solution(phone_number):
    s = str(phone_number)
    
    if len(s) <= 4:
        return s
    
    return '*' * (len(s) - 4) + s[-4:]