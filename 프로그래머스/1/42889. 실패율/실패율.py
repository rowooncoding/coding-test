def solution(N, stages):
    counts = [0] * (N + 2)
    for s in stages:
        counts[s] += 1
        
    result = []
    players = len(stages)
    
    for stage in range(1, N + 1):
        if players == 0:
            fail = 0
        else:
            fail = counts[stage] / players
        
        result.append((fail, stage))
        
        players -= counts[stage]
    
    result.sort(key=lambda x: (-x[0], x[0]))
    
    return [stage for _, stage in result]