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
  var z = this.matrix.length - 1;
  var copy = [];

for(var a = 0; a < 5; a++){
  var row = [];
  for(var b = 0; b < 5; b++){
    row.push(this.matrix[a][b]);
  }
     copy.push(row);
}
 for(var i = 0; i < this.matrix.length; i++){
   if(direction =="ClockWise"){
      this.matrix[i][4] = copy[0][i];
      this.matrix[4][i] = copy[z - i][4];
      this.matrix[i][0] = copy[4][i];
      this.matrix[0][i] = copy[z - i][0];
   }
   else{
      this.matrix[z- i][0] = copy[0][i];
      this.matrix[4][i] = copy[i][0];
      this.matrix[i][4] = copy[4][z - i];
      this.matrix[0][i] = copy[i][4];
   }

    }
 for(var g = 1; g < 4; g++){
  if(direction == "ClockWise"){
     this.matrix[g][3] = copy[1][g];
     this.matrix[3][g] = copy[3-(g-1)][3];
     this.matrix[g][1] = copy[3][g];
     this.matrix[1][g] = copy[3-(g-1)][1];
   }
   else{
     this.matrix[3-(g-1)][1] = copy[1][g];
     this.matrix[3][g] = copy[g][1];
     this.matrix[g][3] = copy[3][3-(g-1)];
     this.matrix[1][g] = copy[g][3];
  }

 }


return this.matrix;
  // must be a valid Direction, see Direction.js


};