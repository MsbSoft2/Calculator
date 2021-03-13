
var btn1 = document.getElementById('btn1');
var enterNumber = document.getElementById('enterNumber');
var operator = '';
var temp = 0;

function clearAll() {
    enterNumber.value = '';
    temp = 0;
}

function addNum(n) {
    enterNumber.value += n;
}

function btnOperator(operator) {
    if (enterNumber.value.length > 0) {
        this.operator = operator;
        temp = parseFloat(enterNumber.value);
        enterNumber.value = '';
    } else {
        alert("Enter Number");
    }
}

function btnEqual() {
    var number2 = parseFloat(document.getElementById('enterNumber').value);
    switch (operator) {
        case '+':
            enterNumber.value = parseFloat(temp) + parseFloat(number2);
            break;
        case '-':
            enterNumber.value = parseFloat(temp) - parseFloat(number2);
            break;
        case '*':
            enterNumber.value = parseFloat(temp) * parseFloat(number2);
            break;
        case '/':
            enterNumber.value = parseFloat(temp) / parseFloat(number2);
            break;
    }
}