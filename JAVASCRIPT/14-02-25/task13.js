let num1=parseInt(prompt("Enter the first number: "))
let num2=parseInt(prompt("Enter the second number: "))
let num3=(num2+40)
//console.log(num3)
if (num2 % num1 !== 0) {
    num2 += (num1 - (num2 % num1));
    }
while(num2<=num3){
    console.log(num2)
    num2+=num1
}
