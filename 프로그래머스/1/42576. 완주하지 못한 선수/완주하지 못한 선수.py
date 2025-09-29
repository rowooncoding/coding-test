def solution(participant, completion):
    participant_dic = {}
    
    for name in participant:
        participant_dic[name] = participant_dic.get(name, 0) + 1
        
    for name in completion:
        participant_dic[name] -= 1
        
    for name, count in participant_dic.items():
        if count > 0:
            return name