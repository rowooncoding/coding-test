def solution(numlist, n):
    result = sorted(numlist, key=lambda x: (abs(x-n), n-x))
    return result

# 1. sorted를 사용하여 numlist를 정렬함, 단 key를 기준으로 정렬함
# 2. key란 무엇인가
# 2-1. lambda를 사용
# 2-1-1. numlist의 각 요소는 x임
# 2-1-2. 그 x는 절대값 x-n의 절대값을 기준으로 정렬(n과 가까운 순으로 정렬된다)
# 2-1-3. 만약 그 값이 겹친다면 다음 식(n-x)을 실행함
# 3. 그 결과를 result에 할당한다