import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);

        int asciiNumber = sc.next().charAt(0);

        System.out.println(asciiNumber);
    }
}