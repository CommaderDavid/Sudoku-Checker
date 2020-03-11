// const col4 = [1, 2, 3, 4, 5, 5, 7, 8, 9]; broken test.
const col1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const col2 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
const col3 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
const col4 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
const col5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
const col6 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
const col7 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
const col8 = [8, 9, 1, 2, 3, 4, 5, 6, 7];
const col9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
export const sudoku = [col1, col2, col3, col4, col5, col6, col7, col8, col9];
// total = 45

export function LookRow(col) {
  const testArray = JSON.parse(JSON.stringify(col));
  const finalArray = [];
  const findRow = testArray.map(array => {
    array.sort();
    var arrayTotal = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === i + 1) {
        array[i] = 0;
        arrayTotal += 0;
      } else {
        arrayTotal += array[i];
        finalArray.push(arrayTotal);
        break;
      }
      if (i === 8) {
        finalArray.push(arrayTotal);
      }
    }
  });
  return finalArray;
}

export function LookColumn(col) {
  const testSudoku = JSON.parse(JSON.stringify(col));
  // Makes a copy of the sudoku board.

  const findColumn = testSudoku[0];
  // Takes position one in the sudoku board array.
  const sudokuArrayFinal = [];
  // Creates a final counting array.
  for (let x = 0; x < findColumn.length; x++) {
    // Goes through the first row of col1.
    const checkArray = []; // Creates a dummy array for each columns content.
    for (var y = 0; y < testSudoku.length; y++) {
      // Loops through each row in the same column.
      checkArray.push(testSudoku[x][y]); // Pushes the content into the dummy array.
    }
    checkArray.sort();
    // Takes the dummy array and sorts it out in numarical order.
    var arrayTotal = 0; // Sets the arrayTotal var to 0.
    for (var i = 0; i < checkArray.length; i++) {
      // Loops through the dummy array in incraments of one.
      if (checkArray[i] === i + 1) {
        checkArray[i] = 0;
        arrayTotal += 0;
        // If the number matches, turn that number to 0 and add to arrayTotal by 0.
      } else {
        arrayTotal += checkArray[i];
        sudokuArrayFinal.push(arrayTotal);
        break;
        // Else adds the integer to arrayTotal, then pushes to sudokuArrayFinal and breaks the loop.
      }
      if (i === 8) {
        sudokuArrayFinal.push(arrayTotal);
        // If it completes the loop without breaking push to sudokuArrayFinal with the total from arrayTotal.
      }
    }
  }
  return sudokuArrayFinal;
}
