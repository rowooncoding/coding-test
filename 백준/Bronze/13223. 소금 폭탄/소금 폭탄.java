import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] current = sc.next().split(":");
        String[] drop = sc.next().split(":");

        int currentHour = Integer.parseInt(current[0]);
        int currentMinute = Integer.parseInt(current[1]);
        int currentSecond = Integer.parseInt(current[2]);

        int dropHour = Integer.parseInt(drop[0]);
        int dropMinute = Integer.parseInt(drop[1]);
        int dropSecond = Integer.parseInt(drop[2]);

        int currentSecondAmount = currentHour * 3600 + currentMinute * 60 + currentSecond;
        int dropSecondAmount = dropHour * 3600 + dropMinute * 60 + dropSecond;

        int NeedSecondAmount = dropSecondAmount - currentSecondAmount;
        if (NeedSecondAmount <= 0) {
            NeedSecondAmount += 24 * 3600;
        }

        int needHour = NeedSecondAmount / 3600;
        int needMinute = (NeedSecondAmount % 3600) / 60;
        int needSecond = NeedSecondAmount % 60;

        System.out.printf("%02d:%02d:%02d",needHour, needMinute, needSecond);
    }
}