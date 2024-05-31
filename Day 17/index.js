// function to validate ISBN of digit 13.

function validateISBN13(isbn) {
    // Remove any hyphens or spaces from the ISBN
    isbn = isbn.replace(/[-\s]/g, '');

    // Check if the length is exactly 13 characters
    if (isbn.length !== 13) {
        return false;
    }

    // Check if all characters are digits
    if (!/^\d+$/.test(isbn)) {
        return false;
    }

    // Calculate the checksum using the ISBN-13 formula
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        let digit = parseInt(isbn.charAt(i));
        sum += (i % 2 === 0) ? digit : digit * 3;
    }

    // Calculate the check digit
    let checkDigit = (10 - (sum % 10)) % 10;

    // Compare the calculated check digit with the actual last digit of the ISBN
    return checkDigit === parseInt(isbn.charAt(12));
}

// Test the function
console.log(validateISBN13("9789787867295")); // false
console.log(validateISBN13("9789787867297")); // true
