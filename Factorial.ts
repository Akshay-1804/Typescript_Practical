function FindFactorial(num:number):number{
    if(num===0) return 1;
    return num*FindFactorial(num-1);
}

const Number1:number = 5;
console.log(`Factorial of ${Number1} is ${FindFactorial(Number1)}`);