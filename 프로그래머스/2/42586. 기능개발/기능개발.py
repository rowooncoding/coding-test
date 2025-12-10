import math

def solution(progresses, speeds):
    answer = []
    days = [math.ceil((100 - p) / s) for p, s in zip(progresses, speeds)]
    
    max_day = days[0]
    count = 1
    
    for i in range(1, len(days)):
        if days[i] <= max_day:
            count += 1
        else:
            answer.append(count)
            max_day = days[i]
            count = 1
    
    answer.append(count)
    
    return answer