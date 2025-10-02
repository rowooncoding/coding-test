def solution(s):
    answer = []
    
    for char in s:
        if len(answer) == 0 or char == "(":
            answer.append(char)
        elif answer[-1] == "(":
            answer.pop()
            
    if len(answer) == 0:
        return True
    else:
        return False
        
            