package org.example.multithreading;

public class LTask1ThreadTwo extends Thread {
    public void run(){
        System.out.println("From ThreadTwo!");
        System.out.println("From ThreadTwo!");
        System.out.println(10/0);
    }
}

class test {
    public static void main(String[] args){
        LTask1ThreadTwo t2=new LTask1ThreadTwo();
        t2.start();
        t2.start();
        //t2.run();
    }
}


