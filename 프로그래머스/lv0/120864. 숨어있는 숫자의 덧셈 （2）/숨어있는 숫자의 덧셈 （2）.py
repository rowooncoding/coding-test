def solution(my_string):
    # 리스트 순회 시키기
    for i in my_string:
        # 알파벳 찾는 함수
        if i.isalpha():
            # 찾은 알파벳 요소들을 공백으로 전환
            my_string = my_string.replace(i, ' ')
    # 공백 기준으로 리스트 생성
    my_string = my_string.split()
    # 문자열을 int로 바꿔준 리스트를 생성 후 더해주는 메소드 사용
    return sum(list(map(int, my_string)))