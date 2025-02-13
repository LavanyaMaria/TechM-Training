package org.example.collections.list;

import java.util.ArrayList;
import java.util.List;

public class Listsample extends Thread{
    public void run() {
        List<Integer> list1 = new ArrayList<>();
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        list1.add(03);
        list1.add(30);
        list1.add(10);
        list1.add(07);
        list1.add(14);
        list1.add(19);
        list1.add(06);
        list1.add(04);
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        //  System.out.println("The given list is:"+list1);
        System.out.println("Number of elements in the list: " + list1.size());
        //Adding one element
        list1.add(42);
        System.out.println("After adding one element:");
        System.out.println("The given list is :" + list1);
        System.out.println("The number of elements in the list: " + list1.size());
        //Checking for an element
        System.out.println("Is 99 available in the list:" + list1.contains(99));
        System.out.println("The given list before removing elements is :" + list1);

        list1.remove(07);//Removing element by its index
        list1.remove(04);//Removing element by its index
        System.out.println("After removing elements:");
        System.out.println("The given list is :" + list1);
        System.out.println("The number of elements in the list: " + list1.size());
    }
}


