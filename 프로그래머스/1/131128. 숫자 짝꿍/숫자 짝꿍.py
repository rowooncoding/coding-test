from collections import Counter

def solution(X, Y):
    cntX = Counter(X)
    cntY = Counter(Y)
    
    arr = []
    for i in range(9, -1, -1):
        common = min(cntX[str(i)], cntY[str(i)])
        arr.append(str(i) * common)
        
    answer = "".join(arr)
    
    if answer == "":
        return "-1"
    
    if answer[0] == "0":
        return "0"
    
    return answer