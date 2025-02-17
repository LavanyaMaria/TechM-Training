function factors(num){
    console.log("Factors of ",num);
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}
input=Number(prompt("enter the number:"))
factors(input)
