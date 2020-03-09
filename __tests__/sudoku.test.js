// use "debugger" to look for bugs and broken code.
import { sudoku } from './../src/sudoku.js'
import { LookRow } from './../src/sudoku.js'

describe('sudoku board', () => {
  const sud = sudoku.slice();
  console.log(sudoku);
  console.log(sud);
  const row = LookRow(sud);
  console.log(row, "ROW");
  console.log(sud);
  console.log(sudoku);

  test('should find sudoku board', () => {
    expect(sud).toContain(sudoku[0]);
  });
});

// describe('LookRow', () => {
//   var sud2 = sudoku.slice();
//   console.log(sud2);
//   var row2 = LookRow(sud2);
//   console.log(row2);
//
//   test('should check for number in rows to be 1-9, no repeats', () => {
//     expect(row2).toContainEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//
//   });
//
//   // test('should see myDict', () => {
//   //   var sud = sudoku;
//   //   var row = LookRow(sud);
//   // })
// });
