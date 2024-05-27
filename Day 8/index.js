// find the nth valu of a factorial 


function factorial(n) {
    if(n===0) return 1;
    let result = 1
    for(let i=1; i<=Math.sqrt(n); i++){
        result *= i;
    }
    return result
}


function recursiveFactorial(n) {
    if(n===0) return 1;
    return n * recursiveFactorial(n-1)
}


console.log(factorial(0))
console.log(factorial(10))
console.log(factorial(17))


// Big-O: O(n)