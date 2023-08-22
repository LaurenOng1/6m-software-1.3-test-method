/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
    // Add code here
    for (let i in studentList) {
        console.log(studentList[i]);
    }
}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}


// inefficient iteration 1:
    // let output = "";
    // for (let i in studentList) {
    //     output = studentList[i]; 
    //     console.log(output);
    // }