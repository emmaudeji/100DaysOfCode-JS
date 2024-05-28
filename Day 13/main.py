# // most frequent char in an alphanumeric string
def mostFrequentCharacter(string):
    frequencyMap = {}
    maxFrequency = 0
    mostFrequentChar = ''

    # Populate the frequency map
    for char in string:
        # Skip non-alphabetical characters
        if not char.isalpha():
            continue

        # Update frequency map
        frequencyMap[char] = frequencyMap.get(char, 0) + 1

        # Check the most frequent character
        if frequencyMap[char] > maxFrequency:
            maxFrequency = frequencyMap[char]
            mostFrequentChar = char

    return mostFrequentChar

# Test the function with an example string
exampleString = "aabbccddeeffgggghhhhiiiiijjjjjkkkkkkkkllllllllmmmmmmmmmmmm"
result = mostFrequentCharacter(exampleString)
print(f"The most frequent character is: {result}")
