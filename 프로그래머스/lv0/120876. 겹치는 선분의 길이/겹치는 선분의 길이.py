def solution(lines):
    # 각 선분의 길이를 구하고 집합으로 담음
    sets = [set(range(min(l), max(l))) for l in lines]
    # 모든 경우의 수의 집합들의 교집합을 구하고 합집합으로 겹치는 곳을 찾음
    # 그걸 len으로 길이를 리턴
    return len(sets[0] & sets[1] | sets[0] & sets[2] | sets[1] & sets[2])