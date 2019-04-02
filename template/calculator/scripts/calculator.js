/**
 * core
 */
class Calculator {

    constructor() {
        this.clear();
    }

    getResult() {
        let result = this.calculate(parseFloat(this.firstNumber), parseFloat(this.secondNumber), this.operator);
        this.clear();
        return result;
    }

    calculate(first, second, op) {
        let result = 0;
        if(isNaN(first) == false && isNaN(second)) {
            return first;
        }
        switch(op) {
            case '+': result = first + second; break;
            case '-': result = first - second; break;
            case '/': result = first / second; break;
            case '*': result = first * second; break;
            default: result = false;
        }
        if(isNaN(result) == true) {
            return false;
        } else {
            return result;
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
    output.innerHTML = 'Welcome';

    let elements = document.getElementsByClassName('number');
    for(let i=0; i < elements.length; i++) {
        elements[i].addEventListener('click', (e) => {
            if(calculator.operatorSet()) {
                calculator.setSecondNumber(e.target.value);
                output.innerHTML = calculator.firstNumber + ' ' + calculator.operator;
                input.innerHTML = calculator.secondNumber;
            } else {
                output.innerHTML = '';
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
console.log(testCalc.calculate(9, 8, '+'), "should be", 17);
console.log(testCalc.calculate(20, 5, '-'), "should be", 15);
console.log(testCalc.calculate(90, 3, '/'), "should be", 30);
console.log(testCalc.calculate(12, 4, ''), "should be", false); // true = hasError (changed to false, because true as an error is misleading)
