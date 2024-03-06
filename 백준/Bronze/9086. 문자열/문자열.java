import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        String[] strArray = new String[n];

        for (int i = 0; i < n; i++) {
            String str = sc.next();
            String result = str.substring(0, 1) + str.substring(str.length() -1);
            strArray[i] = result;
        }

        for (String string : strArray) {
            System.out.println(string);
        }
    }
}