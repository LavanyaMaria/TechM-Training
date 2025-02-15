package org.example.assignment.feb10;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;
public class Files {
    public static void main(String[] args) throws IOException {
        File hosp=new File("Hospital");
        File pharm=new File("Pharmacy");
        hosp.mkdir();
        pharm.mkdir();

        //files in hospital folder

        File surg=new File("Hospital","Surgeon.txt");
        File ped=new File("Hospital","Pediatrician.txt");
        File dent=new File("Hospital","Dentist.txt");

        surg.createNewFile();
        ped.createNewFile();
        dent.createNewFile();

        //files in pharmacy folder

        File narc= new File("Pharmacy","Narcotics.txt");
        File dep=new File("Pharmacy","Depressants.txt");
        File sed=new File("Pharmacy","Sedation.txt");
        File sti=new File("Pharmacy","Stimulants.txt");

        narc.createNewFile();
        dep.createNewFile();
        sed.createNewFile();
        sti.createNewFile();

    }
}
