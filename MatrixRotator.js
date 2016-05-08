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
MatrixRotator.prototype.rotate = function(direction,layer) {
  // do work here
  var orge = 0;
  if(!layer){

  }
  else
    orge = layer;
  if(layer > 3 || layer < 1)
        throw new RangeError('Parameter must be between ' + 1 + ' and ' + 3);

  var z = this.matrix.length - 1;
  var copy = [];
for(var a = 0; a < this.matrix.length; a++){
  var row = [];
  for(var b = 0; b < this.matrix[a].length; b++){
    row.push(this.matrix[a][b]);
  }
     copy.push(row);
}

 for(var i = 0; i < this.matrix.length; i++){
  if(layer === 3 && orge === 3){
    if(direction =="ClockWise"){
      this.matrix[i][5] = copy[0][i];
      this.matrix[5][i] = copy[z - i][5];
      this.matrix[i][0] = copy[5][i];
      this.matrix[0][i] = copy[z - i][0];
    }
    else{
      this.matrix[z- i][0] = copy[0][i];
      this.matrix[5][i] = copy[i][0];
      this.matrix[i][5] = copy[5][z - i];
      this.matrix[0][i] = copy[i][5];
    }
  }
  else if(orge === 0){
     if(direction =="ClockWise"){
      this.matrix[i][5] = copy[0][i];
      this.matrix[5][i] = copy[z - i][5];
      this.matrix[i][0] = copy[5][i];
      this.matrix[0][i] = copy[z - i][0];
    }
    else{
      this.matrix[z- i][0] = copy[0][i];
      this.matrix[5][i] = copy[i][0];
      this.matrix[i][5] = copy[5][z - i];
      this.matrix[0][i] = copy[i][5];
    }
  }
  }

 for(var g = 1; g < 5; g++){
  if(orge === 2){
    if(direction == "ClockWise"){
      this.matrix[g][4] = copy[1][g];
      this.matrix[4][g] = copy[4-(g-1)][4];
      this.matrix[g][1] = copy[4][g];
      this.matrix[1][g] = copy[4-(g-1)][1];
    }
    else{
      this.matrix[4-(g-1)][1] = copy[1][g];
      this.matrix[4][g] = copy[g][1];
      this.matrix[g][4] = copy[4][4-(g-1)];
      this.matrix[1][g] = copy[g][4];
    }
  }
  else if(orge === 0){
    if(direction == "ClockWise"){
      this.matrix[g][4] = copy[1][g];
      this.matrix[4][g] = copy[4-(g-1)][4];
      this.matrix[g][1] = copy[4][g];
      this.matrix[1][g] = copy[4-(g-1)][1];
    }
    else{
      this.matrix[4-(g-1)][1] = copy[1][g];
      this.matrix[4][g] = copy[g][1];
      this.matrix[g][4] = copy[4][4-(g-1)];
      this.matrix[1][g] = copy[g][4];
    }
  }
 }
 if(orge === 1){
  if(direction == "ClockWise" && layer === 1){
     this.matrix[2][2] = copy[3][2];
     this.matrix[2][3] = copy[2][2];
     this.matrix[3][2] = copy[2][3];
     this.matrix[3][3] = copy[3][3];
   }
  else if(direction == "CounterClockWise" && layer === 1){
     this.matrix[2][2] = copy[2][3];
     this.matrix[2][3] = copy[3][3];
     this.matrix[3][2] = copy[2][2];
     this.matrix[3][3] = copy[3][2];
  }
 }
 else if(orge === 0){
  if(direction == "ClockWise"){
     this.matrix[2][2] = copy[3][2];
     this.matrix[2][3] = copy[2][2];
     this.matrix[3][2] = copy[3][3];
     this.matrix[3][3] = copy[2][3];
   }
  else if(direction == "CounterClockWise"){
     this.matrix[2][2] = copy[2][3];
     this.matrix[2][3] = copy[3][3];
     this.matrix[3][2] = copy[2][2];
     this.matrix[3][3] = copy[3][2];
  }
 }

return this.matrix;
  // must be a valid Direction, see Direction.js


};