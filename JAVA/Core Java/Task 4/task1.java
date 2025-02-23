package org.example.assignment.corejava.Task4;

class task1 {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};

            System.out.println(numbers[5]); 
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println(e);
        }
        System.out.println("Program continues after exception handling.");
    }
}
