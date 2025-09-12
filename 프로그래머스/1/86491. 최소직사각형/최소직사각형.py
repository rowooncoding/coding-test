def solution(sizes):
    max_long = 0
    max_short = 0
    
    for width, height in sizes:
        long_side = max(width, height)
        short_side = min(width, height)
        
        max_long = max(max_long, long_side)
        max_short = max(max_short, short_side)
        
        
    return max_long * max_short