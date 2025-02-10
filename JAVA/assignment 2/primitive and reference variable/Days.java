package org.example.assignment.primitive;
import java.util.Scanner;

enum DaysOfWeek{
    monday, tuesday, wednesday, thursday, friday, saturday, sunday
}
public class Days {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a day of the week: ");
        String day=sc.nextLine().toLowerCase();
        try{
            DaysOfWeek d= DaysOfWeek.valueOf(day);

            if(d==DaysOfWeek.saturday || d==DaysOfWeek.sunday){
                System.out.println("Holiday");
            }
            else {
                System.out.println("Not Holiday");
            }
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid day is entered!");
        }

    }

}
