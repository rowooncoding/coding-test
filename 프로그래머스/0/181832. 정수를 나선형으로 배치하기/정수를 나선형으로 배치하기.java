class Solution {
    public int[][] solution(int n) {
        int[][] answer = new int[n][n];
        int[] dr = {0, 1, 0, -1};
        int[] dc = {1, 0, -1, 0};
        int r = 0, c = 0;
        int direction = 0;
        for (int num = 1; num <= n * n; num++) {
            answer[r][c] = num;
            int nextR = r + dr[direction];
            int nextC = c + dc[direction];
            if (nextR < 0 || nextR >= n || nextC < 0 || nextC >= n || answer[nextR][nextC] != 0) {
                direction = (direction + 1) % 4;
            }
            r += dr[direction];
            c += dc[direction];
        }
        return answer;
    }
}