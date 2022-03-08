//level 1
// question 1
function addNum() {
    let x = 2;
    function add() {
        let y = 3;
        let addition = x + y;
        return addition;
    }
    return add;
}
const plus = addNum();
console.log(plus());



function calculator() {
    let x = 5;
    let y = 7
    function add() {
        let addition = x + y
        return addition
    }
    function subtract() {
        let subtraction = x - y
        return subtraction
    }
    function divide() {
        let division = x / y
        return division
    }
    function multiply() {
        let multiplication = x * y
        return multiplication
    }
    return {
        addIt: add(),
        minusIt: subtract(),
        timesIt: multiply(),
        divideIt: divide()
    }
}
const calculate = calculator()
console.log(calculate.minusIt);
console.log(calculate.addIt);
console.log(calculate.timesIt);
console.log(calculate.divideIt);

