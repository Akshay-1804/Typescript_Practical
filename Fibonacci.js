function Fibonacci(len) {
    if (len <= 0)
        return [];
    var series = [0, 1];
    for (var i = 2; i < len; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return len === 1 ? [0] : series;
}
var Length = 8;
console.log("Fibonacii series of length ".concat(Length, " is ").concat(Fibonacci(Length)));
