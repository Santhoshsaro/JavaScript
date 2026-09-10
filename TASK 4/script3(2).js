// TASK 16 — Function With Parameter

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");


// TASK 17 — Multiple Parameters

function student(name, age, department) {
    console.log(name);
    console.log(age);
    console.log(department);
}

student("Arun", 25, "IT");
student("Priya", 24, "HR");
student("Kumar", 23, "ECE");

// TASK 18 — Addition Function

function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

// TASK 19 — Salary

function salary(amount) {
    return amount;
}

let employeeSalary = salary(50000);
console.log(employeeSalary);

// TASK 20 — Bonus Calculator

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);
console.log(total);

// TASK 21 — Default Parameter

function employee(name, role = "Developer") {
    console.log(name);
    console.log(role);
}

employee("Arun");
employee("Priya", "Designer");

// TASK 22 — Named Function

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));

// TASK 23 — Anonymous Function

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));

// TASK 24 — Arrow Function

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 5));

// TASK 25
function test() 
{
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);

    // console.log(b); // Error
    // console.log(c); // Error
}

test();


// ================================
// TASK 26 — Hoisting with var

console.log(hoistVar);

var hoistVar = 10;


// ================================
// TASK 27 — Hoisting with let
// ================================

// console.log(hoistLet); // ReferenceError
// let hoistLet = 20;


// ================================
// TASK 28 — Hoisting with const
// ================================

// console.log(hoistConst); // ReferenceError
// const hoistConst = 30;


// ================================
// TASK 29 — IIFE
// ================================

(function() {
    console.log("Welcome to JavaScript");
})();

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);

// TASK 30 

function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);

// TASK 31

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackGenerator = cashback();

for (let value of cashbackGenerator) 
    {
    console.log(value);
    }

// TASK 32 

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 26,
        department: "IT",
        role: "Tester",
        salary: 45000
    }
];

for (let employee of employees) {
    console.log(employee);
}

for (let employee of employees) {
    for (let key in employee) {
        console.log(key + " : " + employee[key]);
    }
}

// Function + Parameters
function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

for (let employee of employees) {
    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}

// Return
function getSalary(employeeSalary) {
    return employeeSalary;
}

let salaryValue = getSalary(employees[0].salary);
console.log("Salary:", salaryValue);

// Condition
for (let employee of employees) {
    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    }
}

// Arrow Function
let yearlySalary = (salary) => {
    return salary * 12;
};

console.log(yearlySalary(40000));

// Generator
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefitGenerator = benefits();

for (let benefit of benefitGenerator) {
    console.log(benefit);
}