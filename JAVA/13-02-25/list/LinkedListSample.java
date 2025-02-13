package org.example.collections.list;

import java.util.LinkedList;
import java.util.List;

public class LinkedListSample extends Thread{
    public void run(){
        List<Integer> ll= new LinkedList<>();
        //System.out.println("Is the Linked List empty? \n"+ll.isEmpty());
        ll.add(2);
        ll.add(4);
        ll.add(6);
        ll.add(8);
        ll.add(10);
        ll.add(0);
        System.out.println("The given list is:"+ll);
        System.out.println("The size of the Linked List : "+ ll.size());
        //Adding one element
        ll.add(42);
        System.out.println("After adding one element:");
        System.out.println("The given list is :" + ll);
        System.out.println("The number of elements in the list: " + ll.size());
        //Checking for an element
        System.out.println("Is 99 available in the list:" + ll.contains(99));
        System.out.println("The given list before removing elements is :" + ll);

        ll.remove(05);//Removing element by its index
        ll.remove(04);//Removing element by its index
        System.out.println("After removing elements:");
        System.out.println("The given list is :" + ll);
        System.out.println("The number of elements in the list: " + ll.size());

    }
}
