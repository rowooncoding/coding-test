def solution(n):
    x = 0

    for i in range(n):
        x += 1
        while x % 3 == 0 or '3' in str(x):
            x += 1
    return x