package org.example.multithreading.serialize_desserialize;

import java.io.*;

public class Employee implements Serializable {
    int Eno;
    String Ename;
    transient String Eemail;

    public Employee(int Eno, String Ename, String Eemail){
        this.Eno=Eno;
        this.Ename=Ename;
        this.Eemail=Eemail;
    }

    public void display() {
        System.out.println("Eno: " + Eno);
        System.out.println("Ename: " + Ename);
        System.out.println("Email: " + Eemail); // This will be null after deserialization
    }
}
class EmployeeSerialization{
    public static void main(String[] args){
        try {
            Employee e1 = new Employee(1, "Leo", "leodas@gmail.com");
            FileOutputStream file = new FileOutputStream("employee.txt");
            ObjectOutputStream obj = new ObjectOutputStream(file);
            obj.writeObject(e1);
            obj.flush();
            obj.close();
            System.out.println("Success!");
        }
        catch (Exception e){System.out.println(e);}

        try{
            ObjectInputStream in=new ObjectInputStream(new FileInputStream("employee.txt"));
            Employee e= (Employee) in.readObject();
            System.out.println("Details of the employee:");
            e.display();
        } catch (Exception e){
            System.out.println(e);
        }
    }
}
