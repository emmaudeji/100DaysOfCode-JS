
def is_power_of_two(n):
    if n < 2:
        return "Choose number fromm 2"
    x=0
    while n>1:
        if n%2 != 0:
            return False
        else:
            x += 1
        n=n/2

    return x

print(is_power_of_two(2))
print(is_power_of_two(64))
print(is_power_of_two(23))