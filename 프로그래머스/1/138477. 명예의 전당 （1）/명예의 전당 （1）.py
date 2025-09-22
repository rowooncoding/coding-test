def solution(k, score):
    answer = []
    hall_of_fame = []
    
    for daily_score in score:
        hall_of_fame.append(daily_score)
        
        hall_of_fame.sort(reverse=True)
        
        if len(hall_of_fame) > k:
            hall_of_fame.pop()
        
        answer.append(min(hall_of_fame))
    
    return answer
            
        
        
    
    
    
    
    return lowest_singer