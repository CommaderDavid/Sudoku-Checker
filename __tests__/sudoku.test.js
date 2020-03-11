// use "debugger" to look for bugs and broken code.
import { sudoku } from './../src/sudoku.js'
import { LookRow, LookColumn } from './../src/sudoku.js'

describe('sudoku board', () => {
  const sud = sudoku;

  test('should find sudoku board', () => {
    expect(sud).toContain(sudoku[0]);
  });
});

describe('LookColumn', () => {
  var sud2 = sudoku;
  var column = LookColumn(sud2);

  test('should check for number in columns to be 1-9, no repeats', () => {
    expect(column).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  });
});

describe('LookRow', () => {
  var sud3 = sudoku;
  var row = LookRow(sud3);

  test('should check for number in rows to be 1-9, no repeats', () => {
    expect(row).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  });
});
