def solution(array, height):
    a = sorted(array)
    n = 0
    for i in a:
        if i > height:
            n += 1
    return n
