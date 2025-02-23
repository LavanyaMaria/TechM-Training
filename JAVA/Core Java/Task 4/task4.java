package org.example.assignment.corejava.Task4;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class task4 {
    static void checkNumbers(String filePath) throws Exception {
        File file = new File(filePath);
        
        if (!file.exists() || !file.isFile()) {
            throw new FileNotFoundException("File not found!");
        }

        Scanner sc = new Scanner(file);
        while (sc.hasNext()) {
            if (sc.hasNextInt()) {
                int num = sc.nextInt();
                if (num > 0) {
                    sc.close();
                    throw new Exception("Positive number found: " + num);
                }
            } else {
                sc.next(); // Skip non-integer values
            }
        }
        System.out.println("All numbers are non-positive.");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the file path: ");
        String path = sc.nextLine();

        try {
            checkNumbers(path);
        } catch (Exception e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
        System.out.println("Program continues after exception handling.");
    }
}

