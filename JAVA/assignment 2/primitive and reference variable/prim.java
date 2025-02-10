package org.example.assignment.primitive;
import java.util.Arrays;
import java.util.Scanner;
public class prim {
    static void modifyValues(int a, int[] ar){
        System.out.println("Enter the number: ");
        a+=50;
        ar[0]+=50;
        System.out.println("Inside method - integer = "+a);
        System.out.println("Inside method - array = "+ Arrays.toString(ar));
    }

    public static void main(String[] args){
        int num=5;
        int[] array={1,2,3};
        System.out.println("Before method - integer = "+num);
        System.out.println("Before method - array = "+Arrays.toString(array));

        modifyValues(num,array);

        System.out.println("After method - integer = "+num);
        System.out.println("After method - array = "+Arrays.toString(array));

    }
}
