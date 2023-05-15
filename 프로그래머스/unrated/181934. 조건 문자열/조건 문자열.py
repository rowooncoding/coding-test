3
4
5
6
7
8
9
10
11
12
13
14
15
16
def solution(ineq, eq, n, m):
    answer = 0

    if (ineq, eq) == ('<', '='):
        answer = int(n <= m)
    elif (ineq, eq) == ('>', '='):
        answer = int(n >= m)
    elif (ineq, eq) == ('<', '!'):
        answer = int(n < m)
    elif (ineq, eq) == ('>', '!'):
        answer = int(n > m)
    else:
        return 'wrong input'

    return answer