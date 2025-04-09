import Foundation

func solution(_ n:Int) -> Int {
    var answer: Int = 0
    
    if n % 2 != 0 {
        for i in stride(from: n, to: 0, by: -1) {
            if i % 2 != 0 {
                answer += i
            }
        }
    } else {
        for i in stride(from: n, to: 0, by: -1) {
            if (i % 2 == 0) {
                answer += (i * i)
            }
        }
    }
    
    return answer
}