package org.example.assignment.oopeg;

public class Car {
    private String car_make;
    private String car_model;
    private int year;

    public Car(String car_make, String car_model, int year){
        this.car_make=car_make;
        this.car_model=car_model;
        this.year=year;
    }

    public void setCar_make(String car_make){
        this.car_make=car_make;
    }

    public void setCar_model(String car_model) {
        this.car_model = car_model;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getCar_make(){
        return car_make;
    }

    public String getCar_model(){
        return car_model;
    }

    public int getYear(){
        return year;
    }

    public void startEngine(){
        System.out.println("Engine has started.");
    }

}
