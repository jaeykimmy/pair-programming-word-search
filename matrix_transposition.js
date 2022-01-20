const transpose = function(matrix) {
  const rows = matrix[0].length;
  //console.log('rows:', rows);
  const cols = matrix.length;
  //console.log('column:', cols);
  const grid = [];
  
  for (let x = 0; x < rows; x++) {
    const newRow = [];
    for (let y = 0; y < cols; y++) {
      let column = newRow.push(matrix[y][x]);
      column;
      //console.log('column:', column);
    }
    let pushedNewRow = grid.push(newRow);
    pushedNewRow;
    //console.log('row break:', pushedNewRow);
  }
  return grid;
};

module.exports = transpose;