def solution(my_string):
    string = my_string.lower()
    array = list(string)
    array.sort()
    answer = "".join(array)
    return answer