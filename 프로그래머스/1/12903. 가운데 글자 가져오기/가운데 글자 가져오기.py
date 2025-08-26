def solution(s):
    
    count = len(s)
    
    if count == 1:
        return s
    
    if count % 2 == 0:
        # 짝수면 가운데 두글자를 반환해야함
        start_idx = (count//2) - 1
        end_idx = (count//2) + 1
        
        return s[start_idx:end_idx]
    else:
        # 가운데 인덱스를 알아내서 그 글자를 반환하면 됨
        target_idx = count//2
        return s[target_idx]
        