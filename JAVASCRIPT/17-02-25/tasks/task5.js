student={id:102,
        name:"Leo Das",
        department:"Civil",
        college:"Oxford University",
        email:"leodas10@gmail.com",
        address:{doorNo:34, street:"Madison Square", 
        area:"Standford", pincode:600011}};
        
function displayDetails(){
    console.log("Student Details:")
    console.log("Student Id: ",student.id)
    console.log("Student Name: ",student.name)
    console.log("Department: ",student.department)
    console.log("College: ",student.college)
    console.log("Email: ",student.email)
}
displayDetails()

function displayStudent(){
    console.log("Student Id: ",student.id)
    console.log("Student Name: ",student.name)
    console.log("Student Email: ",student.email)
}
displayStudent()

function displayDet(){
    console.log("Student Complete Details:")
    console.log("Student Id: ",student.id)
    console.log("Student Name: ",student.name)
    console.log("Department: ",student.department)
    console.log("College: ",student.college)
    console.log("Email: ",student.email)
    console.log("Address: ",student.address.doorNo, 
    student.address.street, student.address.area, 
    student.address.pincode);
};
displayDet();

delete student.email;
delete displayStudent;
function displayDetailsWithoutEmail() {
    console.log("Student Complete Details (without Email):");
    console.log("Student Id: ", student.id);
    console.log("Student Name: ", student.name);
    console.log("Department: ", student.department);
    console.log("College: ", student.college);
    console.log("Address: ", student.address.doorNo, student.address.street, student.address.area, student.address.pincode);
}

displayDetailsWithoutEmail();

