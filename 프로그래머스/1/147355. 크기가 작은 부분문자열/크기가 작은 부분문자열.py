def solution(t, p):
    # 1. P의 길이를 구한다
    # 2. 그 길이가 될 수 있는 모든 문자열들을 구한다
    # 3. 그 중에서 P의 값보다 작거나 같은 수의 갯수를 구한다
    
    length = len(p)
    temp_arr = []
    
    for i in range(len(t)):
        char = t[i:i+length]
        
        if len(char) < length:
            break
        
        temp_arr.append(char)
        
    return len([num for num in temp_arr if int(num) <= int(p)])