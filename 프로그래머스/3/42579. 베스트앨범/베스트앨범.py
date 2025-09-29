'''
@args
 - genres : 고유 번호
 - plays : 재생 횟수
   - plays[i]는 고유번호가 i -> 0번부터 시작
 
@Tips
 - 우선순위 : 장르 -> 곡
 - 곡 최대 개수 : 2개
'''

def solution(genres, plays):
    genre_total = {}
    genre_songs = {}
    
    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]
        
        genre_total[genre] = genre_total.get(genre, 0) + play
        
        if genre not in genre_songs:
            genre_songs[genre] = []
            
        genre_songs[genre].append((i, play))
        
    sorted_genres = sorted(genre_total.items(), key=lambda x:x[1], reverse=True)
    
    answer = []
    for genre, _ in sorted_genres:
        songs = sorted(genre_songs[genre], key=lambda x: (-x[1], x[0]))
        answer.extend([song[0] for song in songs[:2]])
        
    return answer