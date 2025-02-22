package org.example.assignment.corejava.Task2;

import java.util.Scanner;

public class Test {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        Employee emp=new Employee();

        System.out.println("Enter the Employee Details");
        System.out.println("Name: ");
        String name=sc.nextLine();
        System.out.println("ID: ");
        int id=sc.nextInt();
        System.out.println("Salary: ");
        double sal=sc.nextDouble();

        emp.setEmployeeDetails(id, name, sal);
        emp.getEmployeeDetails();
    }
}
