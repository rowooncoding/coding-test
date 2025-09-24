def solution(n, arr1, arr2):
    secret_map = []
    
    for i in range(n):
        combine = arr1[i] | arr2[i]
        
        binary_str = format(combine, f'0{n}b')
        
        row = binary_str.replace('1', '#').replace('0', ' ')
        secret_map.append(row)
        
    return secret_map