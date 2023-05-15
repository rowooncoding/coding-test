def solution(a, b):
    str1 = str(a)
    str2 = str(b)
    strAdd1 = int(str1 + str2)
    print(strAdd1)
    strAdd2 = 2 * a * b
    print(strAdd2)

    if (strAdd1 > strAdd2):
        return int(strAdd1)
    else:
        return int(strAdd2)