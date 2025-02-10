package org.example.assignment.oopeg;

public class ElectricCar extends Car {
    int batteryRange;

    public ElectricCar(String car_make, String car_model, int year, int batteryRange)
    {
        super(car_make,car_model,year);
        this.batteryRange=batteryRange;
    }

    public void setBatteryRange(){
        this.batteryRange=batteryRange;
    }

    public int getBatteryRange() {
        return batteryRange;
    }

    public void chargeBattery(){
        System.out.println("Car battery is being charged!");
    }
    @Override
    public void startEngine(){
        System.out.println("Electric Car engine started silently");
    }

}
