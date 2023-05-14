def solution(my_string, overwrite_string, s):
    my_string = list(my_string)
    for idx in range(len(overwrite_string)):
        my_string[s + idx] = overwrite_string[idx]
    return "".join(my_string)