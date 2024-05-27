// check if a number is in power of 2
// a number 'n' is power of 2 if there exista natural number 'x' 2 power x is equal to the 'n'

function isPowerOfTwo(n) {
    if (n<2) return 'Choose a number from 2'
    
    let x = 0;
    while(n>1){
        if(n%2 !== 0){
            return false
        } else {
            x++
        }
        n=n/2
    }
    return x
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(64))
console.log(isPowerOfTwo(16))