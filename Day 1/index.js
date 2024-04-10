function sum(a, b) {
    return a + b;
}

// Example usage:
console.log(sum(5, 3)); // Output: 8


// reverse string with reverse()
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

// reverse string without reverse() 
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

// largest number
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage:
console.log(findLargestNumber([1, 5, 3, 9, 2])); // Output: 9

// fin longest strings
function findLongestStrings(arr) {
    let longestLength = 0,
        longestStrings = [];

    for (let i = 0; i < arr.length; i++) {
        let currStr = arr[i];
        if (currStr.length > longestLength) {
            longestLength = currStr.length;
            longestStrings = [currStr];
        } else if (currStr.length === longestLength) {
            longestStrings.push(currStr);
        }
    }
    return longestStrings.join(', ');
}

// example
console.log(findLongestStrings(["apple", "banana", "orange", "kiwi"])); // Output: ["banana", "orange"]
console.log(findLongestStrings(["cat", "dog", "elephant", "giraffe"])); // Output: ["elephant"]
console.log(findLongestStrings(["bird", "lion", "tiger", "cheetah"])); // Output: ["cheetah"]
console.log(findLongestStrings(["blueberry", "strawberry", "raspberry"])); // Output: ["strawberry", "raspberry"]
console.log(findLongestStrings(["apple", "banana", "orange", "kiwi", "grapefruit"])); // Output: ["grapefruit"]

// factorial is ...
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example usage:
console.log(factorial(5)); // Output: 120


// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. For example, "racecar" and "madam" are palindromes because they are the same when read from left to right or right to left.
function isPalindrome(str) {
    // const reversedStr = str.split('').reverse().join('');
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let reversed = ''
    for (let i = cleanStr.length-1; i>=0; i-- ){
        reversed += cleanStr[i]
    }
    return cleanStr === reversed;
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
