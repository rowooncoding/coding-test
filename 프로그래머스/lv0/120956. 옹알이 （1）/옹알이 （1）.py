from itertools import permutations


def solution(babbling):
    answer = 0
    word = ["aya", "ye", "woo", "ma"]
    arr = []

    for i in range(1, len(word)+1):  # 1234
        for j in permutations(word, i):
            arr.append("".join(j))  # 모든 단어 조합의 경우의 수 넣기

    # 만약 babbling의 단어가 arr(모든 단어 조합)에 들어있다면 카운트
    for i in babbling:
        if i in arr:
            answer += 1

    return answer