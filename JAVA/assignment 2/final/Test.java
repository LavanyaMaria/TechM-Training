package org.example.assignment.finalexp;

public class Test {
    public static void main(String[] args){
        Library lib=new Library();
        lib.displayBooks();

        Book b1 = new Book("The Silent Patient", "Alex Michaelides");
        System.out.println("Book Title: " + b1.getName());
        System.out.println("Book Author: " + b1.getAuthor());
        b1.bookInfo();

        Ebook e1=new Ebook("Inferno","Dan Brown",32);
        System.out.println("Ebook: "+e1.getName());
        System.out.println("Author: "+e1.getAuthor());
        System.out.println("File Size: "+e1.getSize()+"MB");
        e1.bookInfo();
    }
}
