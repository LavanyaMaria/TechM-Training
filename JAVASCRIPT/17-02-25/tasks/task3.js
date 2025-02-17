function sum(num){
    var a=num
    let s=0;
    while(a>0){
        let n=a%10;
        s+=n;
        a=Math.floor(a/10);
    }
    if(s%2==0){
        console.log("The sum of its digits is even!")
    }
    else{
        console.log("The sum of its digits is odd!")
    }
}
input=Number(prompt("enter the number:"))
sum(input)
