package org.example.assignment.finalexp;

public class Ebook extends Book{
    private int size;

    Ebook(String name, String author, int size){
        super(name,author);
        this.size=size;
    }

    public int getSize() {
        return size;
    }

 /*   public void bookInfo(){
        System.out.println("Ebook: "+getAuthor()+"\File Size: "+getSize());
    }*/
}
