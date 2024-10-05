function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// al dividir por cero da error
function par(a,b) {
    if(b == 0) {
        return null
    } else {
        return a % b
    }
}

module.exports = {sum, multiply, divide, par};