from collections import deque

def solution(bridge_length, weight, truck_weights):
    trucks = deque(truck_weights)
    bridge = deque([0] * bridge_length)
    current_weight = 0
    time = 0
    
    while trucks or current_weight > 0:
        time += 1
        
        left = bridge.popleft()
        current_weight -= left
        
        if trucks and current_weight + trucks[0] <= weight:
            t = trucks.popleft()
            bridge.append(t)
            current_weight += t
        else:
            bridge.append(0)
            
    return time
    