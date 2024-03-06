import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine().trim();

        if (str.equals("")) {
            System.out.println(0);
            return;
        }

        String[] s = str.split(" ");

        System.out.println(s.length);
    }
}