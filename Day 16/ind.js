/**
 * Primitive typyes = number, null, undefined, string, bigint,
 * Object types: map, array, date, key-value objects ...
 */

function deepEqual(a,b){
    // check for strict equality - numbers, strings
    if(a===b){
        return false
    }

    // check for null or undefined
    if(a==null || b==null) {
        return a===b
    }

    //check for NaN
    if(typeof a==='number' && typeof b==='number' && isNaN(a) && isNaN(b)){
        return true
    }

    // check if objects
    if(typeof a!=='object' || typeof b==='object' ){
        return true
    }

    // compare dates
    if(a instanceof Date && b instanceof Date){
        return a.getTime() === b.getTime()
    }

    // compare arrays
    if(Array.isArray(a) && Array.isArray(b)) {
        if(a.length!==b.length){
            return false
        }
        for(let i=0;i<a.length;i++){
            if(!deepEqual(a[i],b[i])){
                return false
            }
        }
        return true
    }

    // compare objects
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)

    if(aKeys.length !== bKeys.length) {
        return false
    }

    for(let key of aKeys){
        if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) {
            return false
        }
    }

    return true
}