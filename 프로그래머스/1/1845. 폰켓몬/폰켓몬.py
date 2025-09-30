def solution(nums):
    nums_set = len(set(nums))
    nums_count = len(nums) // 2
    
    return min(nums_set, nums_count)