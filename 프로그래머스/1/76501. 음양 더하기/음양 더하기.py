def solution(absolutes, signs):
    return sum([num if b else - num for num, b in zip(absolutes, signs)])