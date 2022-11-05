
#include <vector>
using namespace std;

class Solution {
    
    inline static const int BALL_DOES_NOT_FALL_THROUGH = -1;

public:
    vector<int> findBall(const vector<vector<int>>& matrix) const {
        vector<int> exitColumnsForBalls(matrix[0].size());
        for (int column = 0; column < matrix[0].size(); ++column) {
            exitColumnsForBalls[column] = findExitColumnsForBalls(matrix, 0, column);
        }
        return exitColumnsForBalls;
    }

private:
    int findExitColumnsForBalls(const vector<vector<int>>& matrix, int row, int column) const {
        if (row == matrix.size()) {
            return column;
        }
        int nextColumn = column + matrix[row][column];
        if (nextColumn < 0 || nextColumn >= matrix[0].size() || matrix[row][column] != matrix[row][nextColumn]) {
            return BALL_DOES_NOT_FALL_THROUGH;
        }
        return findExitColumnsForBalls(matrix, row + 1, nextColumn);
    }
};
