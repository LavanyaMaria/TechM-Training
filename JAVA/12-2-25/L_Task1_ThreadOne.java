package org.example.multithreading;

public class L_Task1_ThreadOne extends Thread {

    public void run(){
        System.out.println("From ThreadOne!");
        System.out.println("From ThreadOne!");
        System.out.println("From ThreadOne!");
        System.out.println(10/0);
    }
}

class Test {
    public static void main(String[] args){
        L_Task1_ThreadOne l1= new L_Task1_ThreadOne();
       // l1.start();
        l1.run();

        System.out.println(10/0);
    }
}


