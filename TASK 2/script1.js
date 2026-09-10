//TASK 1:

var studentName = "Naveen";
let studentAge = 22;
const collegeName = "JJ College";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

// Change var
studentName = "Kumar";
console.log(studentName);

// Change let
studentAge = 23;
console.log(studentAge);

// Change Consts
// collegeName="Nehru College";
// console.log(collegeName);

//TASK 2:

let name = prompt("Enter your name:");
let age=prompt("Enter your age");
let blood=prompt("Enter your blood");

console.log("Name:", name);
console.log("Age:",age);
console.log("blood group:",blood);

// TASK 3:

let Name = prompt("Enter you name");
alert("WElcome" + Name);

// TASK 4:

let birthYear = prompt("Enter your birth year:");

let currentYear = 2026;

let Age = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", age);

//TASK 5:

let a = "Hello";
let b = 100;
let c = 25.5;
let d = true;
let e = false;
let f;
let g = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

//TASK 6:

let student = {
    name: "Naveen",
    age: 22,
    city: "Trichy",
    qualification: "BSc Computer Science",
    isStudent: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

//TASK 7:

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Total fruits:", fruits.length);