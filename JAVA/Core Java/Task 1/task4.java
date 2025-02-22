package org.example.assignment.corejava.Task1;

import java.util.Arrays;

public class task4 {
    public static void main(String[] args){
        int[] ar={1,2,3,4,5,6,7,6,5,4,3,2,1};

        int[] copy= Arrays.copyOfRange(ar,2,8) ;

        System.out.println("Original array: "+Arrays.toString(ar));
        System.out.println("Copied array: "+Arrays.toString(copy));
    }
}
