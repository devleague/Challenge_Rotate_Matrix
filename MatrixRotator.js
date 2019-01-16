const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    let rotated = [[], [], [], [], []];

    if (direction === 'ClockWise') {
      for (let i = 0; i < this.matrix.length; i++) {
        for (let x = 0; x < this.matrix[i].length; x++) {
          rotated[x].unshift(this.matrix[i][x]);
        }
      }
      this.matrix = rotated;
    } else if (direction === 'CounterClockWise') {
      for (let i = 0; i < this.matrix.length; i++) {
        let counter = 4;

        for (let x = 0; x < this.matrix[i].length; x++) {
          rotated[counter].push(this.matrix[i][x]);
          counter--;
        }
      }
      this.matrix = rotated;
    } else {
      throw new Error('Invalid input: Please provide a valid direction, CW (Clockwise) or CCW (CounterClockwise)');
    }
  }
};

