package org.example.assignment.finalexp;

public class Book {
    private final String name;
    private final String author;

    Book(String name,String author){
        this.name=name;
        this.author=author;
    }

    public String getName() {
        return name;
    }

    public String getAuthor() {
        return author;
    }

    public final void bookInfo(){
        System.out.println("Book: "+getName()+"\nAuthor: "+getAuthor());
    }
}
