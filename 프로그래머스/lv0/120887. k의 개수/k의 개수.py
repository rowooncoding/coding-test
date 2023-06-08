def solution(i, j, k):
    cnt = 0

    for i in range(i, j + 1):
        if str(k) in str(i):
            cnt += str(i).count(str(k))
    return cnt