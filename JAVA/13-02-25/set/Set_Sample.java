package org.example.collections.set;

import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.TreeSet;

public class Set_Sample {
    public static void main(String[] args) {
        HashSet<Integer> hs = new HashSet<>();
        hs.add(21);
        hs.add(14);
        hs.add(07);
        hs.add(20);
        hs.add(24);
        hs.add(26);
        hs.add(29);
        hs.add(25);
        hs.add(28);
        setSample(hs);

        LinkedHashSet<String> lhs = new LinkedHashSet<>();
        lhs.add("Lion");lhs.add("Tiger");lhs.add("Otter");
        lhs.add("Seal");lhs.add("Walrus");lhs.add("Bear");
        lhs.add("Panda"); lhs.add("Ferret"); lhs.add("Puma");
        lhs.add("Turtle");

        setSample(lhs);

        TreeSet<Double> ts = new TreeSet<>();
        ts.add(12.3);ts.add(23.4);ts.add(90.0);
        ts.add(76.5);ts.add(1.23);ts.add(25.8);
        ts.add(33.3); ts.add(10.6);

        setSample(ts);

    }
    public static void setSample(HashSet<Integer> hs)
    {
        System.out.println("HashSet Size: " + hs.size());
        System.out.println("Elements in HashSet: " + hs);
        System.out.print("Using iterator : ");
        Iterator<Integer> iterator = hs.iterator();
        while (iterator.hasNext())
            System.out.print(iterator.next() + " ");
        System.out.println();
        System.out.print("Using enhanced for loop : ");
        for (Integer element : hs)
            System.out.print(element + " ");
        hs.remove(25);
        System.out.println("\nHashSet after removing element : " + hs);
        System.out.println("Elements divisible by 7: ");
        for (Integer i : hs)
            if (i % 7 == 0) {
                System.out.print(i + " ");
            }
        System.out.println("\n----------------------------------------------------");
    }

    public static void setSample(LinkedHashSet<String> lhs)
    {
        System.out.println("LinkedHash Size: " + lhs.size());
        System.out.println("Elements in LinkedHashSet: " + lhs);
        System.out.print("Using iterator : ");
        Iterator<String> iterator = lhs.iterator();
        while (iterator.hasNext())
            System.out.print(iterator.next() + " ");
        System.out.println();
        System.out.print("Using enhanced for loop : ");
        for (String element : lhs)
            System.out.print(element + " ");
        lhs.remove("Turtle");
        System.out.println("\nLinkedHashSet after removing element : " + lhs);
        System.out.println("Elements that have size more than 5 : ");
        for (String i:lhs)
            if(i.length()>5) {
                System.out.print(i + " ");
            }
        System.out.println("\n--------------------------------------------------------");
    }

    public static void setSample(TreeSet<Double> ts) {
        System.out.println("TreeSet Size: " + ts.size());
        System.out.println("Elements in TreeSet: " + ts);
        System.out.print("Using iterator : ");
        Iterator<Double> iterator = ts.iterator();
        while (iterator.hasNext())
            System.out.print(iterator.next() + " ");
        System.out.println();
        System.out.print("Using enhanced for loop : ");
        for (Double element : ts)
            System.out.print(element + " ");
        ts.remove(90.0);
        System.out.println("\nTreeSet after removing element : " + ts);
        System.out.println("Elements that are greater than 20 : ");
        for (Double d : ts)
            if (d > 20) {
                System.out.print(d + " ");

            }
    }
}
