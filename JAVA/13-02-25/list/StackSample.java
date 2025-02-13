package org.example.collections.list;

import java.util.List;
import java.util.Stack;

public class StackSample extends Thread {
    public void run(){
        List<Integer> ll= new Stack<>();
        //System.out.println("Is the Stack empty? \n"+ll.isEmpty());
        ll.add(12);
        ll.add(13);
        ll.add(14);
        ll.add(15);
        ll.add(16);
        ll.add(17);
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
