def factorial(n):
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(0))   # Output: 1
print(factorial(10))  # Output: 3628800
print(factorial(17))  # Output: 355687428096000
