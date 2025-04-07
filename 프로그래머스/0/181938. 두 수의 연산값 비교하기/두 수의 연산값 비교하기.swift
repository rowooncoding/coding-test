import Foundation

func solution(_ a:Int, _ b:Int) -> Int {
    if let result1 = Int("\(a)\(b)") {
        let result2 = 2 * a * b
        
        if (result1 == result2) {
            return result1
        }
        
        return max(result1, result2)
    } else {
        return 0
    }
}