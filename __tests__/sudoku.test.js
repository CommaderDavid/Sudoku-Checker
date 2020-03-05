// use "debugger" to look for bugs and broken code.
import { sudoku } from './../src/sudoku.js'

describe('sudoku board', () => {

  test('should find sudoku board', () => {
    var sud = sudoku;
    expect(sud).toContain(sudoku[0]);
  });

  test('should check for number in rows to be 1-9, no repeats', () => {
    var sud = sudoku;
    
  });
});
