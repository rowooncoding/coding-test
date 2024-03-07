import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        char[] chars = sc.next().toCharArray();

        int ans = 0;

        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == 'A' || chars[i] == 'B' || chars[i] == 'C') {
                ans += 3;
            } else if (chars[i] == 'D' || chars[i] == 'E' || chars[i] == 'F') {
                ans += 4;
            } else if (chars[i] == 'G' || chars[i] == 'H' || chars[i] == 'I') {
                ans += 5;
            } else if (chars[i] == 'J' || chars[i] == 'K' || chars[i] == 'L') {
                ans += 6;
            } else if (chars[i] == 'M' || chars[i] == 'N' || chars[i] == 'O') {
                ans += 7;
            } else if (chars[i] == 'P' || chars[i] == 'Q' || chars[i] == 'R' || chars[i] == 'S'){
                ans += 8;
            } else if (chars[i] == 'T' || chars[i] == 'U' || chars[i] == 'V') {
                ans += 9;
            } else if (chars[i] == 'W' || chars[i] == 'X' || chars[i] == 'Y' || chars[i] == 'Z') {
                ans += 10;
            }
        }
        System.out.println(ans);
    }
}