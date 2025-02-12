package org.example.multithreading.serialize_desserialize;

import java.io.*;

public class Serialization {
    public static void main(String[] args) {
        Student.Serialize();
        Student.Deserialize();
    }

    static class Student implements Serializable {
        int rno;
        String name;
        // transient String email;

        public Student(int rno, String name) {
            this.rno = rno;
            this.name = name;
        }

        public static void Serialize() {
            try {
                //Creating the object
                Student s1 = new Student(2, "Leo");
                //Creating stream and writing the object
                FileOutputStream fout = new FileOutputStream("f.txt");
                ObjectOutputStream out = new ObjectOutputStream(fout);
                out.writeObject(s1);
                out.flush();
                //closing the stream
                out.close();
                System.out.println("success");

            } catch (Exception e) {
                System.out.println(e);
            }
        }

        public static void Deserialize() {
            try {
                //Creating stream to read the object
                ObjectInputStream in = new ObjectInputStream(new FileInputStream("f.txt"));
                Student s = (Student) in.readObject();
                //printing the data of the serialized object
                System.out.println(s.rno + " " + s.name);
                //closing the stream
                in.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}

