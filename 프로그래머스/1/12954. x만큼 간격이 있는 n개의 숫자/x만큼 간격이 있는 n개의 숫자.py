def solution(x, n):
    # x가 2라면 2부터 시작해서
    # 2의 배수로 총 n번 반복하도록 해야함
    
    answer = []
    
    for i in range(n+1):
        if i == 0:
            continue
        
        i *= x
        
        answer.append(i)
        
    return answer