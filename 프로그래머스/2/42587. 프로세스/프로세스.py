from collections import deque

def solution(priorities, location):
    q = deque(enumerate(priorities))
    execute = 0
    
    while q:
        
        idx, cur = q.popleft()
        
        if any(p > cur for _, p in q):
            q.append((idx, cur))
        else:
            execute += 1
            if idx == location:
                return execute