// TASK 8:

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

//TASK 9:

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Total:", total);

//TASK 10:

let tamil = 80;
let english = 75;
let maths = 90;

let Total = tamil + english + maths;
let average = Total / 3;

console.log("Total Marks:", Total);
console.log("Average Marks:", average);

// TASK 11:

let L = 10; //11

let K = L++; //10

console.log(L);
console.log(K);

//TASK 12:
let A = 10; //11

let B = ++a; //11

console.log(A);
console.log(B);

//TASK 13:

let C = 20; //19

let D = a--; //20
console.log(C);
console.log(D);

// TASK 14:

let E= 20;

let F= --a;

console.log(E);
console.log(F); 

//TASK 15:
let G = 5;

let U = G++;

let N = ++G;

let S = U--;

console.log(G);
console.log(U);
console.log(N);
console.log(S);

//TASK 16:

let Num = 10;

Num += 5;
console.log("+= :", Num);

//FINAL TASK
let num = 10;

num += 5;
console.log("After += 5:", num);

num = 10;
num -= 5;
console.log("After -= 5:", num);

num = 10;
num *= 5;
console.log("After *= 5:", num);

num = 10;
num /= 5;
console.log("After /= 5:", num);

num = 10;
num %= 3;
console.log("After %= 3:", num);

num = 10;
num **= 2;
console.log("After **= 2:", num);

//TASK 17:

let name = "SANTHOSH";
let age = 22;
let city = "Trichy";
let college = "JJ College";

let subjects = [
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB"
];

let student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("City:", student.city);
console.log("First Subject:", subjects[0]);
console.log("Last Subject:", subjects[subjects.length - 1]);
console.log("Total Subjects:", subjects.length);
console.log("Complete Object:", student);

//USER+CALCULATOR:

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

// Convert string to number
num1 = Number(num1);
num2 = Number(num2);

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);

