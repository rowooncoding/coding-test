class Solution {
    public int[][] solution(int[][] arr) { 
        int rowCount = arr.length;
        int colCount = arr[0].length;

        if (rowCount > colCount) {
            int[][] answer = new int[rowCount][rowCount];
            
            for (int i = 0; i < rowCount; i++) {
                for (int j = 0; j < colCount; j++) {
                    answer[i][j] = arr[i][j];
                }
            }
            return answer;

        } else if (colCount > rowCount) {
            int[][] answer = new int[colCount][colCount];

            for (int i = 0; i < rowCount; i++) {
                System.arraycopy(arr[i], 0, answer[i], 0, colCount);
            }

            return answer;

        } else {
            return arr;
        }
    }
}