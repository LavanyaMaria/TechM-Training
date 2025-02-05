package org.example;

public class Student {
    private int id;
    private String name;
    private String email;
    private long phno;


    public Student(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public String getName(){
        return name;
    }
    public String getEmail(){
        return email;
    }

    public boolean checkEmail(String enteredEmail)
    {
        return this.email.equals(enteredEmail);
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhno(long phno) {
        this.phno = phno;
    }
    public long getPhno(){
        return phno;
    }
    public void update(String newName,String newEmail, long newPhno){
        this.name=newName;
        this.email=newEmail;
        this.phno=newPhno;
    }
}
