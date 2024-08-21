

function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    // If the display is empty and the value is an operator, do nothing
    if (currentValue === '' && ['+', '-', '*', '/'].includes(value)) {
        return;
    }

    // If the last character is an operator and the new value is also an operator, replace the operator
    if (['+', '-', '*', '/'].includes(value)) {
        const lastChar = currentValue.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            display.value = currentValue.slice(0, -1) + value;
            return;
        }
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    // Remove leading and trailing operators
    expression = expression.replace(/^[+\-*/]+/, '');
    expression = expression.replace(/[+\-*/]+$/, '');

    // Ensure no consecutive operators are in the middle of the expression
    expression = expression.replace(/([+\-*/])\1+/g, '$1');

    // Try to evaluate the cleaned expression
    try {
        display.value = eval(expression); // Evaluate the cleaned expression
    } catch (error) {
        display.value = 'Error';
    }
}
