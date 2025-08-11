def solution(name, yearning, photo):
    
    answer = []
    
    my_dic = dict(zip(name, yearning))
    
    for photo_group in photo:
        total_score = 0
        
        for person in photo_group:
            total_score += my_dic.get(person, 0)
        
        answer.append(total_score)
        
    
    return answer
            
    
    
    