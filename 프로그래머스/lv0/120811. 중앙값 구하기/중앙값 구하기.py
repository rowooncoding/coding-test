
def solution(array):
    newArray = sorted(array)
    result = len(newArray) // 2
    return newArray[result]