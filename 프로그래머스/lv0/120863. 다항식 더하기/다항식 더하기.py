def solution(polynomial):
    answer = ''
    sum = 0
    num = 0
    # 공백 제거 후 + 기준으로 리스트에 넣는다
    polynomial = polynomial.replace(' ', '').split('+')
    # 리스트 요소들 순회
    for e in polynomial :
        # 만약 마지막 요소가 x 문자열이면 조건문 실행
        if e[-1] == 'x':
            # 만약 리스트 요소의 길이가 1과 같으면(x라면) x = 1x 이기 때문에 num +1 을 해준다
            # 1x가 아닌 2x 이상이면 맨끝의 요소를 제외한(x를 제외한)요소들을 정수로 바꿔준다
            num += 1 if len(e) == 1 else int(e[:-1:])
        # 만약 x가 없다면(정수항이라면)
        else :
            # 정수항을 sum에 더해준다
            sum += int(e)
    # 만약 num(x항들이 들어가 있음)이 0보다 크다면(x값이 있다면) 조건문 실행
    if num>0:
        # 만약 num이 1보다 크다면(x항이 하나 이상이면) 문자열로 바꾸고 아니면 공백처리
        # num은 x의 값이 담겨있기 때문에 뒤에 문자열 x를 붙여주고 만약 sum의 값이 있다면 뒤에 문자열 +             를 붙여준다 아니면 공백처리
        answer = (str(num) if num>1 else '')+'x'+(' + ' if sum>0 else '')
    # sum 정수항을 더하는곳에 숫자가 있다면 answer에 +해주고 아니면 공백처리 한다
    answer += (str(sum) if sum>0 else '')
    return answer