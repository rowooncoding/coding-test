def solution(score):
    answer = []
    sort_scores = []

    # 평균 리스트 구하기 [75.0, 70.0, 55.0, 65.0]
    scores = [sum(i)/len(i) for i in score]

    # 내림차순 정렬로 순위를 구한다 [75.0, 70.0, 65.0, 55.0]
    sort_scores = sorted(scores, reverse=True)

    for i in scores:
        answer.append(sort_scores.index(i)+1)  # [1, 2, 4, 3]
    return answer


print(solution([[80, 70], [90, 50], [40, 70], [50, 80]]))

# 현재 배열 구조 : [영어점수, 수학점수]
# 평균을 구한다 : 갹 배열의 요소들을 더해서 그 length만큼 나눠준다
# 그 리스트를 정렬한다
# 정렬한 인덱스를 기준으로 sort_scores 리스트의 숫자를 순위로 만든다
