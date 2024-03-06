import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt(); // 문자의 개수
        char[] charArray = sc.next().toCharArray();

        int ans = 0;
        for (int i = 0; i < charArray.length; i++) {
            char numberChar = charArray[i];
            ans += Integer.parseInt(String.valueOf(numberChar));
        }

        System.out.println(ans);
    }
}