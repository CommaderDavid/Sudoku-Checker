const col1 = [1, 2, 3, 4, 5, 5, 7, 8, 9];
// const col1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  const findRow = testArray.map(array => {
    array.sort();
    for (let i = 0; i < array.length; i++) {
      if (array[i] === i + 1) {
        array[i] = 0
      } else {
        break;
      }
      if (i === 8) {
        return true;
      }
    }
    return array;
  });
  return findRow;
}
