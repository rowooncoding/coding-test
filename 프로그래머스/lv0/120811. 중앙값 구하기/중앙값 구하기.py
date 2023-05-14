def solution(array):
    median = 0
    idx = 0
    newArr = sorted(array)

    if (len(newArr) % 2 == 0):
        idx = len(newArr) // 2
        median = (newArr[idx - 1] + array[idx]) / 2
    else:
        idx = len(newArr) // 2
        median = newArr[idx]
    return median