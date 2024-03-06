import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();
        char[] charArray = sc.next().toCharArray();

        int ans = 0;
        for (int i = 0; i < charArray.length; i++) {
            ans += Integer.parseInt(String.valueOf(charArray[i]));
        }

        System.out.println(ans);
    }
}