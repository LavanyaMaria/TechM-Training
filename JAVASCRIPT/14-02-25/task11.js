let day=prompt("Enter the day of the week:")
switch(day){
    case "Monday":
        alert("Start of the week!")
    case "Tuesday"||"Wednesday"||"Thursday":
        alert("Mid of the week!")
    case "Friday":
        alert("Last working day of the week!")
    case "Saturday":
        alert("WeekEnd - Saturday!")
    case "Sunday":
        alert("WeekEnd - Sunday!")
    default:
        alert("Invalid input!")
}
