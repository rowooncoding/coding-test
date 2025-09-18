def solution(s):
    answer = []
    char_positions = {}
    
    for i, char in enumerate(s):
        if char in char_positions:
            distance = i - char_positions[char]
            answer.append(distance)
        else:
            answer.append(-1)
            
        char_positions[char] = i
    
    
    return answer