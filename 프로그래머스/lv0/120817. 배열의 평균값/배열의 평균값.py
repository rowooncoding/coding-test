from functools import reduce


def solution(numbers):
    arr = reduce(lambda x, y: x+y, numbers)
    answer = arr / len(numbers)
    return answer