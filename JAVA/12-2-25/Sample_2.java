package org.example.multithreading;

public class Sample_2 {
    int amt = 10000;

    synchronized void withdraw(int amt) {
        System.out.println("Going to Withdraw....");

        if (this.amt < amt) {
            System.out.println("Less balance; waiting for deposit...");
            try {
                wait();
            } catch (Exception e) {}
        }
        this.amt-=amt;
        System.out.println("Withdraw completed...");
    }

    synchronized void deposit(int amt){
        System.out.println("Going to deposit...");
        this.amt=amt;
        System.out.println("deposit completed...");
        notify();
    }
}

class test1{
    public static void main(String[] args){
        Sample_2 s2=new Sample_2();
        new Thread(){
            public void run(){s2.withdraw(15000);}
        }.start();
        new Thread(){
            public void run(){s2.deposit(10000);}
        }.start();
    }
}
