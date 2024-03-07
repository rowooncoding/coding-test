import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt();

        char[][] map = new char[N][M];
        for (int i = 0; i < N; i++) {
            map[i] = sc.next().toCharArray();
        }

        boolean[] rowExist = new boolean[N];
        boolean[] colExist = new boolean[M];
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (map[i][j] == 'X') {
                    rowExist[i] = true;
                    colExist[j] = true;
                }
            }
        }
        int rowCount = N;
        int colCount = M;
        for (int i = 0; i < N; i++) {
            if (rowExist[i]) {
                rowCount--;
            }
        }

        for (int i = 0; i < M; i++) {
            if (colExist[i]) {
                colCount--;
            }
        }

        System.out.println(Math.max(rowCount, colCount));
    }
}