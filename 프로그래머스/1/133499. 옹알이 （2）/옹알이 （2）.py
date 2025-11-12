def solution(babbling):
    can_say = ["aya", "ye", "woo", "ma"]
    count = 0
    
    for word in babbling:
        temp = word
        for sound in can_say:
            if sound * 2 in temp:
                break;
            temp = temp.replace(sound, " ")
        else:
            if temp.strip() == "":
                count += 1
            
    return count