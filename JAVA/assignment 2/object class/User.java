package org.example.assignment.object;

import java.util.Objects;

public class User {
    private String name;
    private int age;
    private String address;

    public User(String name, int age, String address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{name='" + name + "', age=" + age + ", address='" + address + "'}";
    }

    // Overriding equals()
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        User user = (User) obj;
        return age == user.age && Objects.equals(name, user.name) && Objects.equals(address, user.address);
    }

    // Overriding hashCode()
    @Override
    public int hashCode() {
        return Objects.hash(name, age, address);
    }

}
