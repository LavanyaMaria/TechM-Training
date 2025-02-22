package org.example.assignment.corejava.Task1.task2;

import java.util.Collection;
import java.util.Comparator;
import java.util.Scanner;
import java.util.Vector;

public class Test {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        Vector<Student> stud=new Vector<>();
        System.out.println("Enter the number of students: ");
        int n=sc.nextInt();

        for(int i=0;i<n;i++){
            System.out.println("Enter the student's name: ");
            String name=sc.next();
            System.out.println("Enter the no. of subjects: ");
            int sub=sc.nextInt();
            int[] marks=new int[sub];
            System.out.print("Enter the marks:\n");
            for(int j=0;j<marks.length;j++)
            {
                marks[j]=sc.nextInt();
            }
            stud.add(new Student(name,marks));
        }
        stud.sort((s1,s2)->s1.total-s2.total);

        System.out.println("Student List: ");
        for(Student s: stud)
        {
            System.out.println(s.print());
        }
    }
}
