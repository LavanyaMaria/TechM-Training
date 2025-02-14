let num1=parseInt(prompt("Enter the first number: "))
let num2=parseInt(prompt("Enter the second number: "))
if(num1>num2){
    let temp=num1
    num1=num2
    num2=temp
}
if(Math.abs(num2-num1)==30){
    while(num1<=num2){
        if(num1%7!=0){
            console.log(num1)
        }
        num1++
    }
}
