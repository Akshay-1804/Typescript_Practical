function Fibonacci(len:number):number[]{
    if(len <= 0) return [];

    let series = [0,1];
    for(let i = 2; i<len;i++){
        series.push(series[i - 1] + series[i - 2]);
    }

    return len === 1?[0]:series;

}

const Length = 8;
console.log(`Fibonacii series of length ${Length} is ${Fibonacci(Length)}`);