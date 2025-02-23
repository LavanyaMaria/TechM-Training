package org.example.assignment.corejava.Task4;

import java.util.Scanner;

class task2 {
    static void checkEven(int num) throws Exception {
        if (num % 2 != 0) {
            throw new Exception("Number is odd!");
        }
        System.out.println("Number is even: " + num);
    }

    public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter the number: ");
      int n=sc.nextInt();
        try {
            checkEven(n); 
        } catch (Exception e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
        System.out.println("Program continues after exception handling.");
    }
}
