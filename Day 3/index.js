// TRIANGKE PATTERNS

function printEquilateralTriangle(height) {
  // Iterate over each row
  for (let row = 0; row < height; row++) {
    // Initialize an empty string to store the current row
    let currentRow = '';
    // Add spaces for indentation
    for (let space = 0; space < height - row - 1; space++) {
      currentRow += ' ';
    }
    // Add asterisks for the triangle pattern
    for (let asterisk = 0; asterisk < 2 * row + 1; asterisk++) {
      currentRow += '*';
    }
    // Print the current row
    console.log(currentRow);
  }
}

// Example usage: print an equilateral triangle with height 3
printEquilateralTriangle(3);


function printHollowRightTriangle(height) {
  // Iterate over each row
  for (let row = 0; row < height; row++) {
    // Initialize an empty string to store the current row
    let currentRow = '';
    // Add asterisks or spaces based on the position
    for (let col = 0; col <= row; col++) {
      if (col === 0 || row === height - 1 || col === row) {
        currentRow += '*';
      } else {
        currentRow += ' ';
      }
    }
    // Print the current row
    console.log(currentRow);
  }
}

// Example usage: print a hollow right-angled triangle with height 5
printHollowRightTriangle(5);

// *
// **
// * *
// *  *
// *****
