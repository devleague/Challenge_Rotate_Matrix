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
  // do work here
  
  var matrixCW = [];

  if(direction === Direction.CW) {

	  for (var i = 0; i < this.matrix.length; i++) {

      matrixCW[i] = [];

		  for (var j = 0; j < this.matrix.length; j++) {

        matrixCW[i][j] = this.matrix[this.matrix.length - 1 - j][i]; 

      } 

  	}

    this.matrix = matrixCW;

  } else if (Direction.CCW) {

  var matrixCCW = [];

    for (var k = 0; k < this.matrix.length; k++) {

      matrixCCW[k] = [];

      for (var l = 0; l < this.matrix.length; l++) {

        matrixCCW[k][l] = this.matrix[l][this.matrix.length - 1 - k];

      }

    }

    this.matrix = matrixCCW;

  }

}; 
	

	// must be a valid Direction, see Direction.js

  


