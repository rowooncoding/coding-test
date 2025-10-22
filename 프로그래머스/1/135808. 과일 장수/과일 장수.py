def solution(k, m, score):
    score.sort(reverse=True)
    count = 0
    
    for i in range(m-1, len(score), m):
        count += score[i] * m
        
    return count