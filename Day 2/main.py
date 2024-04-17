def print_right_triangle(height):
    for row in range(1, height + 1):
        current_row = '*' * row
        print(current_row)

# Example usage: print a right-angled triangle with height 5
print_right_triangle(5)

def print_inverted_right_triangle(height):
    for row in range(height, 0, -1):
        current_row = '*' * row
        print(current_row)

# Example usage: print an inverted right-angled triangle with height 5
print_inverted_right_triangle(5)
