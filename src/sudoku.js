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
  const testArray = col.slice();
  console.log(col, "hi");

  // console.log(testArray + "before");
  // testArray.forEach(array => {
  //   array.sort(function(a, b){return a-b})
  // });
  // console.log(testArray + "after");

  const findRow = testArray.map(array => {
    for (let i = 0; i < array.length; i++) {
      console.log(array, "problem");
      if (array[i] === 1) {
        array[i] = 0
      } else if (array[i] === 2) {
        array[i] = 0
      } else if (array[i] === 3) {
        array[i] = 0
      } else if (array[i] === 4) {
        array[i] = 0
      } else if (array[i] === 5) {
        array[i] = 0
      } else if (array[i] === 6) {
        array[i] = 0
      } else if (array[i] === 7) {
        array[i] = 0
      } else if (array[i] === 8) {
        array[i] = 0
      } else if (array[i] === 9) {
        array[i] = 0
      }
    }
    return array;
  });
  console.log(col, "two");
  console.log(findRow, "three");
  return findRow;
}
