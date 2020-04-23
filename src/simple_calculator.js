function add() {
    let sum = 0
    for (let increment = 0; increment < arguments.length; increment++) {
        sum = sum + arguments[increment]
    }
    return sum
}
function multiply() {
    let multiplied = 1
    for (let increment = 0; increment < arguments.length; increment++) {
        multiplied = multiplied * arguments[increment]
    }
    return multiplied
}
module.exports = { add, multiply }