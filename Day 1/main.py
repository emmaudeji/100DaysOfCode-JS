# Function to calculate the sum of two numbers
def sum(a, b):
    return a + b

# Example usage:
print(sum(5, 3))  # Output: 8


# Function to reverse a string using the reverse() method
def reverse_string(str):
    return ''.join(reversed(str))

# Example usage:
print(reverse_string("hello"))  # Output: "olleh"


# Function to reverse a string without using the reverse() method
def reverse_string(str):
    return str[::-1]

# Example usage:
print(reverse_string("hello"))  # Output: "olleh"


# Function to find the largest number in an array
def find_largest_number(arr):
    largest = arr[0]
    for num in arr:
        if num > largest:
            largest = num
    return largest

# Example usage:
print(find_largest_number([1, 5, 3, 9, 2]))  # Output: 9


# Function to find the longest strings in an array
def find_longest_strings(arr):
    longest_length = 0
    longest_strings = []
    for string in arr:
        if len(string) > longest_length:
            longest_length = len(string)
            longest_strings = [string]
        elif len(string) == longest_length:
            longest_strings.append(string)
    return longest_strings

# Example usage:
print(find_longest_strings(["apple", "banana", "orange", "kiwi"]))  # Output: ['banana', 'orange']
print(find_longest_strings(["cat", "dog", "elephant", "giraffe"]))  # Output: ['elephant']
print(find_longest_strings(["bird", "lion", "tiger", "cheetah"]))   # Output: ['cheetah']
print(find_longest_strings(["blueberry", "strawberry", "raspberry"]))  # Output: ['strawberry', 'raspberry']
print(find_longest_strings(["apple", "banana", "orange", "kiwi", "grapefruit"]))  # Output: ['grapefruit']


# Function to calculate the factorial of a number
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Example usage:
print(factorial(5))  # Output: 120


# Function to check if a string is a palindrome
def is_palindrome(str):
    clean_str = ''.join(c.lower() for c in str if c.isalnum())
    return clean_str == clean_str[::-1]

# Example usage:
print(is_palindrome("racecar"))  # Output: True
print(is_palindrome("hello"))    # Output: False
