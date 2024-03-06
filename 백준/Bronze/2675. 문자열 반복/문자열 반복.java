import java.util.Scanner;

class Main {

    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int countOfQ = sc.nextInt(); // 테스트 케이스의 개수

        for (int i = 0; i < countOfQ; i++) {
            int count = sc.nextInt();
            String str = sc.next();

            for (int j = 0; j < str.length(); j++) {
                for (int k = 0; k < count; k++) {
                    System.out.print(str.charAt(j));
                }
            }
            System.out.println();
        }
    }
}