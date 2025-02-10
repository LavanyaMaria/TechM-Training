package org.example.assignment;
import java.util.Scanner;
public class Maind {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter dividend: ");
        int dividend = scanner.nextInt();

        System.out.print("Enter divisor: ");
        int divisor = scanner.nextInt();

        Divide divideOperation = new Divide(dividend, divisor);
        divideOperation.zero();

        scanner.close();
    }
}
