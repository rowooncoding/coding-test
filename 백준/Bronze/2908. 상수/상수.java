import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String a = sc.next();
        String b = sc.next();
        
        String reversed1 = "";
        String reversed2 = "";

        for (int i = a.length() - 1; i >= 0; i--) {
            reversed1 += a.charAt(i);
            reversed2 += b.charAt(i);
        }

        int number1 = Integer.parseInt(reversed1);
        int number2 = Integer.parseInt(reversed2);

        if (number1 > number2) {
            System.out.println(number1);
        } else {
            System.out.println(number2);
        }
    }
}