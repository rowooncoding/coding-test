def solution(nums):
    unique = len(set(nums))
    pick = len(nums) // 2
    
    return min(unique, pick)