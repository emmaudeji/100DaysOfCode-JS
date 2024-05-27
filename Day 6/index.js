// checking if it is a prime number

function isprime(x) {
    if(x<2)return false
    for (let i = 2; i<x; i++){
        if(x%i===0){
            return false;
        }
    }
    return true;
}

console.log(isprime(1))
console.log(isprime(10))
console.log(isprime(17))

// O(n)  -- linear
