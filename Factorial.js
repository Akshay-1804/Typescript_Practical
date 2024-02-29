function FindFactorial(num) {
    if (num === 0)
        return 1;
    return num * FindFactorial(num - 1);
}
var Number1 = 5;
console.log("Factorial of ".concat(Number1, " is ").concat(FindFactorial(Number1)));
