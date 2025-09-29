def solution(clothes):
    clothes_dic = {}
    
    for name, category in clothes:
        clothes_dic[category] = clothes_dic.get(category, 0) + 1
        
    answer = 1
    for count in clothes_dic.values():
        answer *= count + 1
        
    return answer - 1