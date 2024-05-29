def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# Example usage:
array = [8, -4, 6, -39, 5, 1, 94, 34, -90, 67]
print("Sorted array:", insertion_sort(array))
