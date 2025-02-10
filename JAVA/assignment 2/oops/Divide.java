package org.example.assignment;

public class Divide {
    private int dividend;
    private int divisor;

    public Divide(int dividend, int divisor){
        this.dividend=dividend;
        this.divisor=divisor;
    }

    public void setDividend(int dividend) {
        this.dividend = dividend;
    }

    public void setDivisor(int divisor) {
        this.divisor = divisor;
    }

    public int getDivisor() {
        return divisor;
    }

    public int getDividend() {
        return dividend;
    }

    public void zero() {
        if (divisor == 0) {
            System.out.println("Divisor cannot be 0");
            return;
        }


        int qot = 0;
        int rem = dividend;
        boolean isNegative = false;

        if (dividend < 0 && divisor < 0) {
            dividend = -dividend;
            divisor = -divisor;
        } else if (dividend < 0) {
            dividend = -dividend;
            isNegative = true;
        } else if (divisor < 0) {
            divisor = -divisor;
            isNegative = true;
        }

        while (rem >= divisor) {
            rem -= divisor;
            qot++;
        }

        if (isNegative) {
            qot = -qot;
        }

        System.out.println("Quotient = " + qot);
        System.out.println("Remainder = " + rem);
    }
}
