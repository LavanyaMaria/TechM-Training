package org.example.assignment.corejava.Task4;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class task5 {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the path: ");
        String path=sc.nextLine();
        File file=new File(path);

        try{
            if (!file.exists() || !file.isFile()) {
                throw new FileNotFoundException("File not found!");
            }
            System.out.println("File found! Reading contents...");
            Scanner s=new Scanner(file);
            while (s.hasNextLine()) {
                System.out.println(s.nextLine());
            }
        }catch (FileNotFoundException e){
            System.out.println("Exception caught: " + e.getMessage());
        }
        System.out.println("Program continues after exception handling.");
    }
}
