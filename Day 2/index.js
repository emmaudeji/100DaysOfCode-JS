// TRIANGKE PATTERNS

function printRightTriangle(height) {
    // Iterate over each row
    for (let row = 1; row <= height; row++) {
      // Initialize an empty string to store the current row
      let currentRow = '';
      // Add asterisks to the current row based on the row number
      for (let col = 1; col <= row; col++) {
        currentRow += '*';
      }
      // Print the current row
      console.log(currentRow);
    }
  }
  
  // Example usage: print a right-angled triangle with height 5
  printRightTriangle(5);

  
  function printInvertedRightTriangle(height) {
    // Iterate over each row in reverse order
    for (let row = height; row >= 1; row--) {
      // Initialize an empty string to store the current row
      let currentRow = '';
      // Add asterisks to the current row based on the row number
      for (let col = 1; col <= row; col++) {
        currentRow += '*';
      }
      // Print the current row
      console.log(currentRow);
    }
  }
  
  // Example usage: print an inverted right-angled triangle with height 5
  printInvertedRightTriangle(5);
  
  