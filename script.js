

const operators = ['+', '-', '*', '/'];
let valueA = '';
let operator = '';
let valueB = '';
let answer;
let displayValue = '';
screenOutput = document.querySelector('.screen P')



function add(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return Number(a) + Number(b);
    }
}
function substract(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return Number(a) - Number(b);
    }
}
function multiply(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return Number(a) * Number(b);
    }
}
function divide(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return Number(a) / Number(b);
    }
}

function operate(x, y, op) {
    switch (op) {
        case '+':
            return add(x, y);
            break;
        case '-':
            return substract(x, y);
            break;
        case '*':
            return multiply(x, y);
            break;
        case '/':
            return divide(x, y);
            break;
    }


}

function updateScreen() {
    screenOutput.textContent = displayValue;
}

function haveCommonItems(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}


// const numArray_ids = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9'];
// const oppArray_ids = ['divideSign', 'minusSign', 'timesSign', 'plusSign', 'percentage'];

const numButtons = document.querySelectorAll('.numbers');
const oppButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equalSign');
const clearButton = document.querySelector('#clearbtn');
const percButton = document.querySelector('#percentage');

for (let numButton of numButtons) {
    numButton.addEventListener('click',
        function (event) {
            // updateScreen();
            // numButton.style.color='red';
            let displaySplit = String(displayValue).split('');

            //no operator, displayValue is an answer or empty, valid operator. save input as valueA
            if (!operator && !isNaN(displayValue) && !haveCommonItems(displaySplit, operators)) {
                // displayValue = '';
                // updateScreen();
                // valueA = '';
                valueA = valueA + numButton.textContent;
            }
            else if (operators.includes(operator)) {
                valueB = valueB + numButton.textContent;
                // valueA=answer;
            }
            displayValue = valueA + operator + valueB;
            updateScreen();
        })
}

for (let op of oppButtons) {
    op.addEventListener('click',
        function (event) {
            updateScreen();
            let displaySplit = String(displayValue).split('');
            //displayvalue is an answer or empty
            if (!isNaN(displayValue) && !haveCommonItems(displaySplit, operators)) {
                operator = op.textContent;
                // valueA=answer;
                if (answer) {
                    valueA = displayValue;
                }

                displayValue = displayValue + operator;
                updateScreen();
            }
            // multiple operator signs
            else if (operator && haveCommonItems(displaySplit, operators)) {
                findAnswer();
                operator = op.textContent;
                valueA = answer;
                displayValue = valueA + operator;
                updateScreen();


            }
        })
}

function findAnswer() {

    answer = operate(valueA, valueB, operator);
    displayValue = answer;
    updateScreen();
    // valueA = displayValue;
    // displayValue = '';
    operator = '';
    valueB = '';
    valueA = '';
    // updateScreen();
}
equalButton.addEventListener('click', findAnswer);
// function calculateAnswer(){

clearButton.addEventListener('click', () => {
    displayValue = '';
    operator = '';
    valueA = '';
    valueB = '';
    answer='';
    updateScreen();
})

percButton.addEventListener('click',()=>{
    

})