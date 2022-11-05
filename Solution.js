
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findBall = function (matrix) {
    this.BALL_DOES_NOT_FALL_THROUGH = -1;
    const exitColumnsForBalls = new Array(matrix[0].length);
    for (let column = 0; column < matrix[0].length; ++column) {
        exitColumnsForBalls[column] = findExitColumnsForBalls(matrix, 0, column);
    }
    return exitColumnsForBalls;
};

/**
 * @param {number[][]} matrix
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
function findExitColumnsForBalls(matrix, row, column) {
    if (row === matrix.length) {
        return column;
    }
    let nextColumn = column + matrix[row][column];
    if (nextColumn < 0 || nextColumn >= matrix[0].length || matrix[row][column] !== matrix[row][nextColumn]) {
        return this.BALL_DOES_NOT_FALL_THROUGH;
    }
    return findExitColumnsForBalls(matrix, row + 1, nextColumn);
}
