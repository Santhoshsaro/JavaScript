// TASK 1 — For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// TASK 2 — Reverse Number

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// TASK 3 — Even Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// TASK 4 — Odd Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//TASK 5:
for (let i = 1; i <= 10; i++) {
    console.log(5 + " x " + i + " = " + (5 * i));
}

//TASK 6:

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


//TASK 7:

let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log(sum);

//TASK 8:

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);

//TASK 9

let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

//TASK 10:

let name = "javascript";

for (let char of name) {
    console.log(char);
}


//TASK 11

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}


//TASK 12

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

for (let student of students) {
    console.log("Student: " + student);
}


//TASK 13

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}

//TASK 14

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "HP",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}
// TASK 15

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

