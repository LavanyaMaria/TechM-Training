package org.example.assignment.corejava.Task1.task3;

import java.util.Objects;

public class Employee {
    String name;
    int id;

    Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true; // If both objects point to the same memory location, return true.
        if (obj == null || getClass() != obj.getClass()) return false; // Check for null or different class type.

        Employee employee = (Employee) obj; // Typecast obj to Employee.
        return id == employee.id && Objects.equals(name, employee.name); // Compare name and id.
    }
}
