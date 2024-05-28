// most frequent char in an alphanumeric string

function mostFrequentCharacter(str) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentChar = '';

    // Populate the frequency map
    for (const char of str) {
        // Skip non-alphabetical characters
        if (!/[a-zA-Z]/.test(char)) continue;

        // Update frequency map
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;

        // Check the most frequent character
        if (frequencyMap[char] > maxFrequency) {
            maxFrequency = frequencyMap[char];
            mostFrequentChar = char;
        }
    }
    return mostFrequentChar;
}

// Test the function with an example string
const exampleString = "aabbccddeeffgggghhhhiiiiijjjjjkkkkkkkkllllllllmmmmmmmmmmmm";
const result = mostFrequentCharacter(exampleString);
console.log(`The most frequent character is: ${result}`);


function isAlphabetical(char) {
    // Convert the character to lowercase or uppercase
    const lowerChar = char.toLowerCase();

    // Check if the character remains the same after conversion,
    // indicating that it is an alphabetical character
    return lowerChar !== char.toUpperCase();
}