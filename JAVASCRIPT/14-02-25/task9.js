
let year = parseInt(prompt("Enter the year:"));
let month = prompt("Enter the month (e.g., January, February, March, etc.):");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

    if (month.toLowerCase() === "february") {
        alert("The year is leap year and the month is February with 29 days.");
    } else {
        alert("The year is leap year and the month is not February.");
    }
} else {
    alert("The given year is not a leap year.");
}
