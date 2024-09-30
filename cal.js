function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}

// Get user input
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

// Call the calculator function and display the result
let result = calculator(num1, num2, operator);
console.log("The result is: " + result);