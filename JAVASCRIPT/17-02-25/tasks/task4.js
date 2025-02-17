
const calculator = () => {
  
    let ch = prompt("Choose an operation: add, subtract, multiply, divide : ");

    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));

    switch (ch.toLowerCase()) {
        case "add":
            console.log("Sum = ",(num1+num2));
            break;
        case "subtract":
            console.log(`Difference =`,(num1-num2));
            break;
        case "multiply":
            console.log(`Product = `,(num1*num2));
            break;
        case "divide":
            if (num2 === 0) {
                console.log("Division by zero is not allowed!");
            } else {
                console.log("Quotient = ",Math.floor(num1/num2)," Remainder = ",(num1 % num2));
            }
            break;
        default:
            console.log("Invalid choice! Please choose add, subtract, multiply, or divide.");
    }
};

calculator();
