package org.example.collections.list;

public class Main {
    public static void main(String[] args){
        Listsample l1=new Listsample();
        LinkedListSample l2=new LinkedListSample();
        VectorSample l3=new VectorSample();
        StackSample l4=new StackSample();

        l1.start();
        System.out.println("----------------------------");
        l2.start();
        System.out.println("----------------------------");
        l3.start();
        System.out.println("----------------------------");
        l4.start();
    }
}
