package org.example.assignment.feb10.example3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class buff {
    public static void BufferMethod() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter the movie title :");
        String movie = br.readLine();
        System.out.println("Movie title received!");
        System.out.println(movie);
    }

    public void ScannerMethod()
    {

        Scanner sc = new Scanner(System.in);
        System.out.println("How long is the film?");
        int time = sc.nextInt();
        System.out.println("What is the ticket price?");
        float price = sc.nextFloat();
        System.out.println("How was the movie?");
        String review = sc.next();
        System.out.println("Summary of the movie: ");
        System.out.println(time+" min");
        System.out.println(price);
        System.out.println(review);
    }
}
