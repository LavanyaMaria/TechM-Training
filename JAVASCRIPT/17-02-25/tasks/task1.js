function multiTable() {
    let num = prompt("Enter the number: ");  
    let limit = prompt("Enter the limit: ");

    console.log("Multiplication Table of",num," up to ",limit,":");
    
    for (let i = 1; i <= limit; i++) {
        console.log(num,"x",i,"=",(num*i));
    }
}
multiTable();
