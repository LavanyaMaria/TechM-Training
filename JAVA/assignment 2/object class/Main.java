package org.example.assignment.object;

public class Main {
    public static void main(String[] args) {
        // Creating two User objects with the same values
        User user1 = new User("Alice", 25, "New York");
        User user2 = new User("Alice", 25, "New York");

        // Creating two secondUser objects with the same values
        secondUser secondUser1 = new secondUser("Alice", 25, "New York");
        secondUser secondUser2 = new secondUser("Alice", 25, "New York");

        // Printing the objects
        System.out.println("User1: " + user1);  // Uses overridden toString()
        System.out.println("User2: " + user2);
        System.out.println("SecondUser1: " + secondUser1); // Uses default Object toString()
        System.out.println("SecondUser2: " + secondUser2);

        // Comparing objects
        System.out.println("user1.equals(user2): " + user1.equals(user2)); // true
        System.out.println("secondUser1.equals(secondUser2): " + secondUser1.equals(secondUser2)); // false
    }
}
