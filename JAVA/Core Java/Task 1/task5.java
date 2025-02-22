package org.example.assignment.corejava.Task1;

import java.util.Locale;
import java.util.Scanner;

public class task5 {
    public static void main(String[] args){

        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the string: ");
        String s=sc.nextLine();
        StringBuilder res=new StringBuilder();

        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
            if(i%2==0){
                res.append(Character.toUpperCase(ch));
            }else{
                res.append(ch);
            }
        }
        System.out.println(res);
    }
}

