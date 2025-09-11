def solution(s):
    answer = ''
    word_idx = 0
    
    for char in s:
        if char == ' ':
            answer += ' '
            word_idx = 0
        else:
            if word_idx % 2 == 0:
                answer += char.upper()
            else:
                answer += char.lower()
                
            word_idx += 1
    
    return answer