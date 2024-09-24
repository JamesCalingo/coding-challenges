func interpret(command string) string {
    var interpretation string
    for i, _ := range command {
        switch string(command[i]) {
        case "G":
        interpretation += "G"
        case "(":
        switch string(command[i + 1]) {
            case ")":
            interpretation += "o"
            case "a":
            interpretation += "al"
        }
    }
    }
    return interpretation
}

// This solution beat 100% of other solutions in time complexity the first time I submitted it

// https://leetcode.com/problems/goal-parser-interpretation/
