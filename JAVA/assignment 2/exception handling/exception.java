package org.example.assignment;
import java.text.NumberFormat;
import java.util.InputMismatchException;
import java.util.Scanner;
public class exception {
    public static void processInput() {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Enter the number = ");
            double no = sc.nextDouble();

            if (no == 0) {
                throw new ArithmeticException("Division by zero is not allowed");
            }
            double reciprocal = 1 / no;
            System.out.println("Reciprocal: " + reciprocal);
        } catch (NumberFormatException e) {
            System.out.println("Error: Invalid input. please enter a valid number.");
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
        catch (InputMismatchException e) {
            System.out.println("Error: Give a valid input");
        } finally
        {
            sc.close();
        }
    }
    public static void main(String[] args){
        processInput();
    }
}
