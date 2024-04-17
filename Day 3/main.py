
def print_equilateral_triangle(height):
    for row in range(height):
        current_row = ' ' * (height - row - 1) + '*' * (2 * row + 1)
        print(current_row)

# Example usage: print an equilateral triangle with height 3
print_equilateral_triangle(3)


def print_hollow_right_triangle(height):
    for row in range(height):
        if row == height - 1 or row == 0:
            print('*' * (row + 1))
        else:
            print('*' + ' ' * (row - 1) + '*')

# Example usage: print a hollow right-angled triangle with height 5
print_hollow_right_triangle(5)
