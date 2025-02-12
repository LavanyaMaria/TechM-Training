package org.example.multithreading;

public class LTask1ThreadThree extends Thread{
    public void run(){
        System.out.println("From ThreadThree!");
        System.out.println("From ThreadThree!");
        System.out.println("From ThreadThree!");
        System.out.println("From ThreadThree!");
        System.out.println("From ThreadThree!");
        System.out.println(10/0);
    }
}
class Main{
    public static void main(String[] args){
        LTask1ThreadThree l3=new LTask1ThreadThree();
        l3.start();
        new LTask1ThreadThree().start();
        new LTask1ThreadThree().start();

        new Thread(new ThreadRunnableOne()).start();
        new Thread(new ThreadRunnableTwo()).start();
        new Thread(new ThreadRunnableTwo()).start();

    }
}

class ThreadRunnableTwo implements Runnable{
    public void run() {
        System.out.println("From ThreadRunnableTwo!");
        System.out.println("From ThreadRunnableTwo!");
        System.out.println("From ThreadRunnableTwo!");
    }
}

class ThreadRunnableOne implements Runnable{
    @Override
    public void run() {
        System.out.println("From ThreadRunnableOne!");
        System.out.println("From ThreadRunnableOne!");
    }
}

