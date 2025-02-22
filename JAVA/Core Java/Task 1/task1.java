package org.example.assignment.corejava.Task1;

import java.util.ArrayList;
import java.util.Scanner;

public class task1 {
    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the no. of elements:");
        int n=sc.nextInt();

        ArrayList<Integer> a=new ArrayList<>();
        System.out.println("Elements are: ");
        for(int i=0;i<n;i++)
        {
            a.add(sc.nextInt());
        }
        ArrayList<Integer> res=new ArrayList<>();
        for(int i=0;i<a.size();i++){
            if(i%2==0){
                res.add(a.get(i));
            }
        }

        System.out.println("Original array :"+a);
        System.out.println("Alternative array : "+res);
    }
}

