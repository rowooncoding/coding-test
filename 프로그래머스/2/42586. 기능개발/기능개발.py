import math

def solution(progresses, speeds):
    answer = []
    
    days = [math.ceil((100 - p) / s) for p, s in zip(progresses, speeds)]
    
    count = 1
    max_day = days[0]
    
    for i in range(1, len(days)):
        if max_day >= days[i]:
            count += 1
        else:
            answer.append(count)
            count = 1
            max_day = days[i]
    
    answer.append(count)
    
    return answer
            
        