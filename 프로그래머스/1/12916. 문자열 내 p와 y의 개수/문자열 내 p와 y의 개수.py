def solution(s):
    countP = s.lower().count('p')
    countY = s.lower().count('y')
    
    if countP == countY:
        return True
    elif countP != countY:
        return False
    else:
        return True
    
    
        