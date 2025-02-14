let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

[num1, num2] = swap(num1, num2);
display(num1, num2);

function swap(num1, num2) {
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    return [num1, num2]; 
}

function display(num1, num2) {
    if (Math.abs(num2 - num1) == 50) {
        while (num1 <= num2) {
            if (num1 % 5 != 0) {
                console.log(num1);
            }
            num1++;
        }
    } else {
        console.log("The difference is not 50");
    }
}
