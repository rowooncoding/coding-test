import Foundation

func solution(_ a:Int, _ b:Int) -> Int {
    if let result1 = Int("\(a)\(b)"), let result2 = Int("\(b)\(a)") {
        let maxValue = max(result1, result2)
        return maxValue
    } else {
        return 0
    }
}