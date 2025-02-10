package org.example.assignment.utility;

import org.example.assignment.utility.NumberUtils;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter an integer: ");
        int num = sc.nextInt();

        int length = NumberUtils.getLength(num);
        
        System.out.println("The length of the number " + num + " is: " + length);

    }
}
