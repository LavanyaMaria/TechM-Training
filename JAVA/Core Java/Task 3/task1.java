package org.example.assignment.corejava.Task3;

import java.io.File;

public class task1 {
    public static void main(String[] args){
        String path = "C:\\Users\\lavan\\OneDrive";

        // Create a File object
        File directory = new File(path);

        if (directory.isDirectory()) {
            String[] files = directory.list();

            if (files != null && files.length > 0) {
                System.out.println("Files and Directories in: " + path);
                for (String file : files) {
                    System.out.println(file);
                }
            } else {
                System.out.println("The directory is empty.");
            }
        } else {
            System.out.println("The specified path is not a directory.");
        }
    }
}
