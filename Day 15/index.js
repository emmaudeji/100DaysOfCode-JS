function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let array = [8, -4, 6, -39, 5, 1, 94, 34, -90, 67];
console.log("Sorted array:", insertionSort(array));

// Explanation
// Outer Loop:

// Iterates from the second element to the end of the array.
// Key Element:

// key is the element to be inserted into the sorted portion of the array.
// Inner Loop:

// Moves elements of the sorted portion that are greater than the key to one position ahead of their current position to make space for the key.
// Insertion:

// Places the key in its correct position within the sorted portion of the array.
