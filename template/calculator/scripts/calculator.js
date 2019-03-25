/**
 * core
 */
class Calculator {

    constructor() {
        this.clear();
    }

    getResult() {
        // if(this.firstNumber != '' && this.secondNumber == '') {
        //     let result = this.firstNumber;
        //     this.clear();
        //     return result;
        // }
        let result = this.calculate(parseFloat(this.firstNumber), parseFloat(this.secondNumber), this.operator);
        this.clear();
        return result;
    }

    calculate(first, second, op) {
        if(isNaN(first) == false && isNaN(second)) {
            return first;
        }
        switch(op) {
            case '+': return first + second;
            case '-': return first - second;
            case '/': return first / second;
            case '*': return first * second;
            default: return false;
        }
    }

    clear() {
        this.firstNumber = '';
        this.secondNumber = '';
        this.operator = '';
    }

    setFirstNumber(number) {
        this.firstNumber += number;
    }

    setSecondNumber(number) {
        this.secondNumber += number;
    }

    operatorSet() {
        if(this.operator == '') {
            return false;
        } else {
            return true;
        }
    }
}


/**
 * UI
 */
window.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
    let input = document.getElementById('input');
    let output = document.getElementById('output');

    let elements = document.getElementsByClassName('number');
    for(let i=0; i < elements.length; i++) {
        elements[i].addEventListener('click', (e) => {
            if(calculator.operatorSet()) {
                calculator.setSecondNumber(e.target.value);
                output.innerHTML = calculator.firstNumber + ' ' + calculator.operator;
                input.innerHTML = calculator.secondNumber;
            } else {
                calculator.setFirstNumber(e.target.value);
                input.innerHTML = calculator.firstNumber;
            }
        });
    }

    let operators = document.getElementsByClassName('operator');
    for(let i=0; i < operators.length; i++) {
        operators[i].addEventListener('click', (e) => {
            calculator.operator = e.target.value;
            input.innerHTML = '';
            output.innerHTML = calculator.firstNumber + ' ' + e.target.value;
        });
    }

    document.getElementById('key-c').addEventListener('click', () => {
        calculator.clear();
        output.innerHTML = '';
        input.innerHTML = '';
    });

    document.getElementById('key-=').addEventListener('click', () => {
        let result = calculator.getResult();
        if(result == false) {
            input.innerHTML = 'invalid operation';
        } else {
            calculator.setFirstNumber(result);
            input.innerHTML = result;
        }
        output.innerHTML = '';
    });
});



/**
 * Tests Scenarios
 */
const testCalc = new Calculator();
console.log(""/*TODO*/, "should be", 17);
console.log(""/*TODO*/, "should be", 15);
console.log(""/*TODO*/, "should be", 30);
console.log(""/*TODO*/, "should be", false); // true = hasError (changed to false, because true as an error is misleading)
