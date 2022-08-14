const numberButtons = document.querySelectorAll("[data-number]")
const operatorButtons = document.querySelectorAll("[data-operator]")

const clearButton = document.getElementById("clearBtn")
const input = document.getElementById("input")

clearButton.addEventListener('click', () => clear())

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent))
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => appendOperator(button.textContent))
});



function appendNumber(number) {
    if (input.textContent !== "0") {
        input.textContent = input.textContent + number
        return
    }
    input.textContent = number
}

function appendOperator(operator) {
    console.log("HI")
    if (input.textContent !== "0") {
        input.textContent = input.textContent + operator
        return
    }
    return
}

function clear() {
    input.textContent = "0"
}