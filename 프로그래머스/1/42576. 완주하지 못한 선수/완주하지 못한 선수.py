from collections import Counter

def solution(participant, completion):
    dic = Counter(participant) - Counter(completion)
    return list(dic.keys())[0]
        
    