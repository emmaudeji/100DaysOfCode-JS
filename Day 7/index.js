// find the nth valu of a fibanocii series
// fibanocci series is a list of numbers that where a value is the sum of the 2 previous items.

function fibonacci(n) {
    if(n===0)return []
    if(n===1)return [0]
    // the first items are [0.1]
    let fib = [0,1]
    for(let i=2; i<n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
    
}

function recursiveFibonacci(n) {
    if(n<2)return 1
    return  recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(fibonacci(0))
console.log(fibonacci(10))
console.log(fibonacci(17))

// Big-O: O(n)
