def solution(clothes):
    dic = {}
    
    for name, category in clothes:
        dic[category] = dic.get(category, 0) + 1
    
    answer = 1
    for values in dic.values():
        answer *= values + 1
    
    return answer - 1