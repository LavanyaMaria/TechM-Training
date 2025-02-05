package org.example;

import java.util.ArrayList;
import java.util.Scanner;
public class StudentLogin {


    public static void main(String[] args) {
        ArrayList<Student> students= new ArrayList<>();

        students.add(new Student(1, "Leo", "leodas@gmail.com"));
        students.add(new Student(2,"Meow","meowcat@gmail.com"));
        students.add(new Student(3,"Keo","keochan12@gmail.com"));

        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your mail to login:");
        String enteredEmail = sc.nextLine();

        Student loggedIn=null;

        for(Student student: students) {
            if (student.checkEmail(enteredEmail)) {
                System.out.println("Login Successful! Welcome " + student.getName() + "!");
                loggedIn = student;
                break;
            }
        }

        if(loggedIn==null) {
            System.out.println("Login failed!No account is found in that email!");
        }
        else {
            System.out.println("Your Profile");
            System.out.println();
            System.out.println("Name: " + loggedIn.getName() +
                    " | Phone no: " + loggedIn.getPhno() +
                    " | Email: " + loggedIn.getEmail());

            System.out.println("Do you want to update your profile?   (Yes/No)");
            String decision = sc.nextLine();

            if (decision.equalsIgnoreCase("Yes")) {
                System.out.print("Enter New Name:");
                String newName = sc.nextLine().trim();
                if (newName.isEmpty()) {
                    newName = loggedIn.getName();
                }

                System.out.print("Enter New Email:");
                String newEmail = sc.nextLine().trim();
                if (newEmail.isEmpty()) {
                    newEmail = loggedIn.getEmail();
                }

                System.out.print("Enter New Phone Number:");
                long newPhno = sc.nextLong();

                loggedIn.update(newName, newEmail, newPhno);

                System.out.println("\nProfile Updated Successfully!");
            }
            System.out.println("\nUpdated Profile:");
            System.out.println("Name: " + loggedIn.getName() +
                    " | Phone No: " + loggedIn.getPhno() +
                    " | Email: " + loggedIn.getEmail());
            System.out.println("\nThank you for using the system!");
        }
    }
}
