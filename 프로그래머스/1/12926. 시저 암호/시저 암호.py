def solution(s, n):
    answer = ''
    
    for char in s:
        if 'A' <= char <= 'Z':
            shifted = chr((ord(char) - ord('A') + n) % 26 + ord('A'))
            answer += shifted
        elif 'a' <= char <= 'z':
            shifted = chr((ord(char) - ord('a') + n) % 26 + ord('a'))
            answer += shifted
        else:
            answer += char
            
    return answer