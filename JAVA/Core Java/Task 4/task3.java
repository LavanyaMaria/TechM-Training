package org.example.assignment.corejava.Task4;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class task3 {

    static void readFile(String filePath) throws FileNotFoundException {
        File file = new File(filePath);
        if (!file.exists() || !file.isFile()) {
            throw new FileNotFoundException("File not found!");
        }
        System.out.println("File found! Reading contents...");
        Scanner sc = new Scanner(file);
        while (sc.hasNextLine()) {
            System.out.println(sc.nextLine());
        }
    }
    public static void main(String[] args){

        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the file path: ");
        String path=sc.nextLine();
        try{
            readFile(path);
        }  catch (FileNotFoundException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
        System.out.println("Program continues after exception handling.");
    }
}


