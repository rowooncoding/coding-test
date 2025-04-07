import Foundation

func solution(_ str1:String, _ str2:String) -> String {
    var answer: String = ""
    
    for (a, b) in zip(str1, str2) {
        answer.append(a)
        answer.append(b)
    }
    
    return answer
}