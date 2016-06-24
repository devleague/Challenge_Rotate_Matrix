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
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;
};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  console.log("*****Start*****" + direction);
  // do work here
  var matrix = this.matrix;
  var newMatrix = [];
  if (direction === Direction.CW){
    for (i = 0; i < matrix.length; i++){
      newMatrix[i] = [];
      for (j = 0; j < matrix[i].length; j++){
          newMatrix[i].unshift(matrix[j][matrix.length - 1 - i]);
        // newMatrix[i][j] = matrix[j][matrix.length - 1 - i];
      }
    }
  newMatrix = newMatrix.reverse();//This flipped the outermost.
  } else {
    console.log("***** Else Statement");
    for (i = 0; i < matrix.length; i++){
      newMatrix[i] = [];
      for (j = 0; j < matrix[i].length; j++){
          newMatrix[i].unshift(matrix[matrix.length - 1 - i][j]);
          console.log("*****" + (matrix.length - 1 - i) + " " + j);
        // newMatrix[i][j] = matrix[j][matrix.length - 1 - i];
      }
    }
  }
  this.matrix = newMatrix;
  console.log(this.matrix);
  return newMatrix;
  // must be a valid Direction, see Direction.js


};






//   var matrix = this.matrix;
//   var newMatrix = [];
//   for (i = 0; i < matrix.length; i++){
//     newMatrix[i] = [];
//     for (j = 0; j < matrix[i].length; j++){
//       newMatrix[i][j] = matrix[j][matrix.length - 1 - i];
//     }
//   }
//   this.matrix = newMatrix;
//   console.log(this.matrix);
//   return newMatrix;
//   // must be a valid Direction, see Direction.js


// };