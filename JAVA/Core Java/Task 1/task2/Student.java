package org.example.assignment.corejava.Task1.task2;

public class Student {
    String name;
    int [] marks;
    int total;
    double avg;

    public Student(String name, int[] marks) {
        this.name = name;
        this.marks = marks;
        this.total = 0;
        for(int m:marks){
            total+=m;
        }
        this.avg = (double) total/ marks.length;
    }
    public String print(){
        return name+" Total = "+total+" Average = "+avg;
    }
}
