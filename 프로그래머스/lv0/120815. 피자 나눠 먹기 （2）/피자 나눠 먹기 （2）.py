def solution(n):
    i = 1
    while True:
        if ((i * 6) % n == 0):
            answer = i
            return answer
        else:
            i += 1