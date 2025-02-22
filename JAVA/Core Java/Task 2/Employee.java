package org.example.assignment.corejava.Task2;

import java.util.Scanner;

public class Employee {
    private int empId;
    private String empName;
    private double sal;

    public void setEmployeeDetails(int empId, String empName, double sal) {
        this.empId = empId;
        this.empName = empName;
        this.sal = sal;
    }
    public void getEmployeeDetails(){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the work experience(in years) : ");
        int work= sc.nextInt();
        System.out.println("Name : "+empName);
        System.out.println("ID : "+empId);
        System.out.println("Salary : "+sal);
        System.out.println("Loan Eligibility : "+ getLoanEligibility(work));
    }

    public String getLoanEligibility(int work){
        if (work < 5) {
            return "Employee is not eligible for a loan!";
        } else {
            if (sal == 6.0) {
                return "2 lakhs of loan is granted";
            } else if (sal >= 10.0 && sal<15.0) {
                return "5 lakhs of loan is granted";
            } else if (sal >= 15.0) {
                return "7 lakhs of loan is granted";
            }
        }
        return "No loan is granted";
    }
}
