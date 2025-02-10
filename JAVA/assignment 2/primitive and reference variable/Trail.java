package org.example.assignment.primitive;

import java.util.Scanner;

public class Trail {
    public static int trailZero(int n){
        int count=0;
        while(n>=5){
            count+=n/5;
            n/=5;
        }
        return count;
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

        System.out.println("Enter a number: ");
        int num= sc.nextInt();

        int res=trailZero(num);
        System.out.println("Trailing Zeros in "+num+"!= "+ res);
    }
}
