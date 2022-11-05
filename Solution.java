
public class Solution {

    private static final int BALL_DOES_NOT_FALL_THROUGH = -1;

    public int[] findBall(int[][] matrix) {
        int[] exitColumnsForBalls = new int[matrix[0].length];
        for (int column = 0; column < matrix[0].length; ++column) {
            exitColumnsForBalls[column] = findExitColumnsForBalls(matrix, 0, column);
        }
        return exitColumnsForBalls;
    }

    public int findExitColumnsForBalls(int[][] matrix, int row, int column) {
        if (row == matrix.length) {
            return column;
        }
        int nextColumn = column + matrix[row][column];
        if (nextColumn < 0 || nextColumn >= matrix[0].length || matrix[row][column] != matrix[row][nextColumn]) {
            return BALL_DOES_NOT_FALL_THROUGH;
        }
        return findExitColumnsForBalls(matrix, row + 1, nextColumn);
    }
}
