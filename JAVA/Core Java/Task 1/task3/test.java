package org.example.assignment.corejava.Task1.task3;

import java.util.Objects;

public class test {
    public static void main(String[] args) {
        Employee emp1 = new Employee("John", 101);
        Employee emp2 = new Employee("John", 101);
        Employee emp3 = new Employee("Jane", 102);

        System.out.println("Using equals(): " + Objects.equals(emp1, emp2));
        System.out.println("Using equals(): " + Objects.equals(emp1, emp3));

        Employee[] team1 = {new Employee("Alice", 201), new Employee("Bob", 202)};
        Employee[] team2 = {new Employee("Alice", 201), new Employee("Bob", 202)};

        System.out.println("\nUsing equals() on employee arrays: " + Objects.equals(team1, team2)); 
        System.out.println("Using deepEquals() on employee arrays: " + Objects.deepEquals(team1, team2));
    }
}
