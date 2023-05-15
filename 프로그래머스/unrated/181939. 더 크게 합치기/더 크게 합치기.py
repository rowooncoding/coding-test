def solution(a, b):
    str1 = str(a)
    str2 = str(b)
    strAdd1 = str1 + str2
    strAdd2 = str2 + str1

    if (strAdd1 > strAdd2):
        return int(strAdd1)
    else:
        return int(strAdd2)