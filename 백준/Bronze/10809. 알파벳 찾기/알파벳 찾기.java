import java.util.Arrays;
import java.util.Scanner;

class Main {

    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();

        int[] countAlphabet = new int[26];
        Arrays.fill(countAlphabet, -1);

        for (int i = 0; i < str.length(); i++) {
            if (countAlphabet[str.charAt(i) - 'a'] == -1) {
                countAlphabet[str.charAt(i) - 'a'] = i;
            }
        }

        for (int number : countAlphabet) {
            System.out.print(number + " ");
        }
    }
}