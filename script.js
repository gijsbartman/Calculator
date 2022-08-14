let currentNumber = '0'
let previousNumber = '0'
let currentOperator = null
let previousOperator = null
let preview = null
let answer = null

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')

const clearButton = document.getElementById('clearBtn')
const inputField = document.getElementById('input')
const previewField = document.getElementById('preview')

clearButton.addEventListener('click', () => clear())

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent))
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => appendOperator(button.textContent))
});

function appendNumber(number) {
    if (answer !== null) {
        clear()
    }

    if (currentNumber !== '0') {
        currentNumber = currentNumber + number
        inputField.textContent = currentNumber
        return
    }
    currentNumber = number
    inputField.textContent = currentNumber
}

function appendOperator(operator) {
    if (previousNumber === '0' && currentNumber !== '0') {
        currentOperator = operator
        inputField.textContent = '0'

        preview = currentNumber + operator
        previewField.textContent = preview

        previousNumber = currentNumber
        currentNumber = '0'
        return
    } else if (previousNumber !== '0') {
        answer = operate(currentOperator, previousNumber, currentNumber)
        inputField.textContent = answer
        previewField.textContent = preview + currentNumber + '='
    } else if (answer !== null) {
        currentOperator = operator
        previousNumber = answer
        answer = null
    }
}

function clear() {
    currentNumber = '0'
    previousNumber = '0'
    currentOperator = null
    answer = null
    inputField.textContent = "0"
    previewField.textContent = ''
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return substract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
}