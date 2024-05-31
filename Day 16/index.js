/**
 * Primitive Types:

    Undefined: Represents a variable that has not been assigned a value.
    Null: Represents the intentional absence of any object value.
    Boolean: Represents a logical entity and can have two values: true and false.
    Number: Represents both integer and floating point numbers.
    BigInt: Represents integers with arbitrary precision.
    String: Represents a sequence of characters.
    Symbol: Represents a unique and immutable value.
    Object Types:

    Object: Collections of properties, and can include other objects, arrays, dates, etc.
    Array: Ordered lists of values.
    Date: Represents date and time.
    Map: Collections of key-value pairs where keys can be of any type.
    Set: Collections of unique values.
    RegExp: Represents regular expressions.

 * Checks if two values are deeply equal.
 * @param {any} a - The first value to compare.
 * @param {any} b - The second value to compare.
 * @return {boolean} - True if the values are deeply equal, false otherwise.
 */
function deepEqual(a, b) {
    // Check if both values are strictly equal
    if (a === b) {
        return true;
    }

    // Check if either value is null or undefined
    if (a == null || b == null) {
        return a === b;
    }

     // Check for NaN
     if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
        return true;
     }

    // Check if both values are not objects (i.e., primitive types except null)
    if (typeof a !== 'object' || typeof b !== 'object') {
        return false;
    }

    // Compare Date objects by their time value
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }

    // Compare arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }

    // Compare objects
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
        return false;
    }

    for (let key of aKeys) {
        if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

// Example usage:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj1, obj2)); // true

const arr1 = [1, 2, { a: 3 }];
const arr2 = [1, 2, { a: 3 }];
console.log(deepEqual(arr1, arr2)); // true

// Examples generating NaN
const example1 = 0 / 0;              // NaN
const example2 = Math.sqrt(-1);      // NaN
const example3 = Number("abc");      // NaN
const example4 = "abc" * 2;          // NaN

console.log(example1); // NaN
console.log(example2); // NaN
console.log(example3); // NaN
console.log(example4); // NaN

// Using deepEqual to compare NaN values
console.log(deepEqual(example1, example2)); // true
console.log(deepEqual(example3, example4)); // true

// Comparing NaN with a non-NaN value
console.log(deepEqual(example1, 5));        // false
console.log(deepEqual(example2, null));     // false


/**
 * 
 * 
 * 
 * 
 */