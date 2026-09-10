//Task 1 — Student Result Analyzer
console.log("Task1");

let studentName1 = "SK";
let department1 = "CS";

let mark1 = 89;
let mark2 = 90;
let mark3 = 85;
let mark4 = 99;
let mark5 = 87;

function calculateResult1() {
    let totalMark1 = mark1+mark2+mark3+mark4+mark5;
    let average1 = totalMark1/5;

    let result1;
    let grade1;

    if(average1>=50){
        result1 = "Pass";

        if(average1>=90){
            grade1 = "A";
        }
        else if(average1>=75){
            grade1 = "B";
        }else if(average1>=60){
            grade1 = "C";
        }else{
            grade1 = "D";
        }
    }else{
        result1 = "Fail";
        grade1 = "Fail";
    }

    console.log("Student Name: ",studentName1);
    console.log("Department: ",department1);
    console.log("Total: ",totalMark1);
    console.log("Average: ",average1);
    console.log("Result: ",result1);
    console.log("Grade: ",grade1);
}
calculateResult1();

//Task 2 — Employee Salary Calculator
console.log("Task2");

let employee2 = {
    name: "Arun", 
    role: "Developer", 
    salary: 45000, 
    experience: 2
};

function calculateSalary2(employee) 
{ 
     let basicSalary2 = employee.salary; 
     let bonus2 = 0;

     if (employee.experience >= 5) 
        {bonus2 = basicSalary2 * 0.15; 
    } else if (employee.experience >= 2) { 
                bonus2 = basicSalary2 * 0.10; 
    }
    let finalSalary2 = basicSalary2 + bonus2;

    console.log("Name:", employee.name); 
    console.log("Role:", employee.role); 
    console.log("Basic Salary:", basicSalary2); 
    console.log("Bonus:", bonus2); 
    console.log("Final Salary:", finalSalary2); 
}
calculateSalary2(employee2);

//Task 3 — Product Filter System
console.log("Task3");
      let products3 = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let above2000_3 = products3.filter(product => product.price > 2000); 
console.log("Above 2000:", above2000_3);

let electronics3 = products3.filter(product => product.category === "electronics"); 
console.log("Electronics:", electronics3);

let below1000_3 = products3.find(product => product.price < 1000); 
console.log("Below 1000:", below1000_3);

let totalPrice3 = products3.reduce((total, product) => total + product.price, 0); 
console.log("Total Price:", totalPrice3);

let above50000_3 = products3.some(product => product.price > 50000); 
console.log("Any product above 50000:", above50000_3);

let everyAbove500_3 = products3.every(product => product.price > 500); 
console.log("Every product above 500:", everyAbove500_3);

//Task 4 — Employee Management
console.log("Task4");

let employees4 = [
     { id: 101, 
       name: "Kavin", 
       role: "Frontend Developer", 
       salary: 40000 
    },
    { 
        id: 102, 
        name: "Priya", 
        role: "Backend Developer", 
        salary: 50000 
    },
    { 
        id: 103, 
        name: "Arun", 
        role: "Full Stack Developer", 
        salary: 65000 
    },
    { 
        id: 104, 
        name: "Harini", 
        role: "UI Developer", 
        salary: 45000 
    }, 
    { 
        id: 105, 
        name: "Dinesh",
        role: "Software Engineer", 
        salary: 70000 
    }, 
    { 
        id: 106,
        name: "Riya", 
        role: "Data Analyst",
        salary: 55000 
    } 
];

let employeeNames4 = employees4.map(employee => employee.name); 
console.log("Employee Names:", employeeNames4);

let above40000_4 = employees4.filter(employee => employee.salary > 40000); 
console.log("Above 40000:", above40000_4);

let employeeId103_4 = employees4.find(employee => employee.id === 103); 
console.log("Employee ID 103:", employeeId103_4);

let totalSalary4 = employees4.reduce( 
    (total, employee) => total + employee.salary, 0
   ); 
   console.log("Total Salary:", totalSalary4);

let highestPaid4 = employees4.reduce( 
    (highest, employee) => 
        employee.salary > highest.salary ? employee : highest
 );

 let sortedEmployees4 = [...employees4].sort( 
    (a, b) => b.salary - a.salary
);

console.log("High to Low:", sortedEmployees4);

let namesOnly4 = employees4.map(employee => employee.name); 
console.log("Names Only:", namesOnly4);

//Task 5 — Shopping Cart
console.log("Task5");

let shoppingCart = [

    {
        name: "Laptop",
        price: 52000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 1200,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 2500,
        quantity: 1
    }
];

function calculateCart(cart) {

    let totalCartValue = cart.reduce(
        (total, item) =>
            total + (item.price * item.quantity),
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalAmount = totalCartValue - discount;

    console.log("\n========== TASK 5: SHOPPING CART ==========");

    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;

        console.log(
            item.name,
            "=>",
            item.price,
            "x",
            item.quantity,
            "=",
            itemTotal
        );
    });

    console.log("Total Cart Value :", totalCartValue);
    console.log("Discount         :", discount);
    console.log("Final Amount     :", finalAmount);
}

calculateCart(shoppingCart);

//TASK 6 - STUDENT SEARCH SYSTEM
console.log("Task6");
let classStudents = [

    {
        name: "Adithya",
        age: 21,
        mark: 86
    },

    {
        name: "Meenakshi",
        age: 22,
        mark: 94
    },

    {
        name: "Harish",
        age: 20,
        mark: 72
    },

    {
        name: "Deepak",
        age: 23,
        mark: 48
    }
];

let studentNames = classStudents.map(
    student => student.name
);

let studentsAbove80 = classStudents.filter(
    student => student.mark > 80
);

let selectedStudent = classStudents.find(
    student => student.name === "Meenakshi"
);

let averageStudentMark =
    classStudents.reduce(
        (total, student) => total + student.mark,
        0
    ) / classStudents.length;

let anyoneFailed = classStudents.some(
    student => student.mark < 50
);

let everyoneAbove40 = classStudents.every(
    student => student.mark > 40
);

let studentsSortedByMarks = [...classStudents].sort(
    (a, b) => b.mark - a.mark
);

console.log("\n========== TASK 6: STUDENT SEARCH SYSTEM ==========");

console.log("All student names       :", studentNames);

console.log("Students above 80       :", studentsAbove80);

console.log("Student Meenakshi       :", selectedStudent);

console.log(
    "Average mark            :",
    averageStudentMark.toFixed(2)
);

console.log("Anyone failed?          :", anyoneFailed);

console.log("Everyone above 40?      :", everyoneAbove40);

console.log("Students by marks       :", studentsSortedByMarks);


// TASK 7 - ARRAY TRANSFORMATION CHALLENGE
console.log("Task7");


let numberCollection = [
    14,
    6,
    9,
    23,
    48,
    11,
    32,
    17
];

let numbersDoubled = numberCollection.map(
    number => number * 2
);

let evenNumbers = numberCollection.filter(
    number => number % 2 === 0
);

let numbersAbove15 = numberCollection.filter(
    number => number > 15
);

let firstAbove20 = numberCollection.find(
    number => number > 20
);

let totalNumbers = numberCollection.reduce(
    (total, number) => total + number,
    0
);

let anyAbove40 = numberCollection.some(
    number => number > 40
);

let allPositive = numberCollection.every(
    number => number > 0
);

let numbersHighToLow = [...numberCollection].sort(
    (a, b) => b - a
);



console.log("Numbers × 2            :", numbersDoubled);

console.log("Even numbers            :", evenNumbers);

console.log("Numbers above 15       :", numbersAbove15);

console.log("First number above 20  :", firstAbove20);

console.log("Total                   :", totalNumbers);

console.log("Any number above 40?   :", anyAbove40);

console.log("Every number positive? :", allPositive);

console.log("Highest → Lowest       :", numbersHighToLow);

// TASK 8 - STRING ANALYZER
console.log("Task8");


let userSentence = prompt(
    "Enter a sentence:"
);

if (userSentence !== null && userSentence.trim() !== "") {

    let trimmedSentence = userSentence.trim();

    let wordArray = trimmedSentence.split(/\s+/);



    console.log(
        "Sentence           :",
        trimmedSentence
    );

    console.log(
        "Total characters   :",
        trimmedSentence.length
    );

    console.log(
        "Uppercase          :",
        trimmedSentence.toUpperCase()
    );

    console.log(
        "Lowercase          :",
        trimmedSentence.toLowerCase()
    );

    console.log(
        'Contains JavaScript:',
        trimmedSentence.includes("JavaScript")
    );

    console.log(
        "First character    :",
        trimmedSentence.slice(0, 1)
    );

    console.log(
        "Last character     :",
        trimmedSentence.slice(-1)
    );

    console.log(
        "Number of words    :",
        wordArray.length
    );

    console.log(
        "JavaScript → Python:",
        trimmedSentence.replace(
            "JavaScript",
            "Python"
        )
    );

    console.log(
        "Array              :",
        wordArray
    );

} else {

    console.log("\nNo sentence entered.");
}

// FINAL MINI PROJECT — EMPLOYEE DASHBOARD
console.log("Final Task");


let companyEmployees = [

    {
        id: 301,
        name: "Varun",
        department: "IT",
        salary: 47000,
        experience: 2
    },

    {
        id: 302,
        name: "Divya",
        department: "HR",
        salary: 51000,
        experience: 4
    },

    {
        id: 303,
        name: "Rohit",
        department: "IT",
        salary: 67000,
        experience: 7
    }
];


// 1. Employee List


console.log("\n1. EMPLOYEE LIST");

console.log(companyEmployees);


// 2. Search Employee By Name

let searchName = "Divya";

let searchedEmployee = companyEmployees.find(
    employee =>
        employee.name.toLowerCase() ===
        searchName.toLowerCase()
);

console.log("\n2. SEARCH EMPLOYEE");

console.log("Search :", searchName);
console.log("Result :", searchedEmployee);


// 3. Department Filter

let selectedDepartment = "IT";

let departmentEmployees = companyEmployees.filter(
    employee =>
        employee.department.toLowerCase() ===
        selectedDepartment.toLowerCase()
);

console.log("\n3. DEPARTMENT FILTER");

console.log(
    selectedDepartment,
    ":",
    departmentEmployees
);


// 4. Salary Filter

let highSalaryEmployees = companyEmployees.filter(
    employee => employee.salary > 50000
);

console.log("\n4. SALARY FILTER");

console.log(
    "Employees earning above ₹50,000:",
    highSalaryEmployees
);


// 5. Total Company Salary

let totalCompanySalary = companyEmployees.reduce(
    (total, employee) =>
        total + employee.salary,
    0
);

console.log("\n5. TOTAL COMPANY SALARY");

console.log(
    "Total Salary: ₹" + totalCompanySalary
);


// 6. Highest Salary

let highestSalaryEmployee = companyEmployees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary
            ? employee
            : highest
);

console.log("\n6. HIGHEST SALARY");

console.log(
    "Highest Paid Employee:",
    highestSalaryEmployee
);


// 7. Experience Filter

let experiencedEmployees = companyEmployees.filter(
    employee => employee.experience > 3
);

console.log("\n7. EXPERIENCE FILTER");

console.log(
    "Employees with more than 3 years:",
    experiencedEmployees
);


// 8. Sorting

let salaryLowToHigh = [...companyEmployees].sort(
    (a, b) => a.salary - b.salary
);

let salaryHighToLowDashboard = [...companyEmployees].sort(
    (a, b) => b.salary - a.salary
);

console.log("\n8. SORTING");

console.log("Low → High:", salaryLowToHigh);
console.log("High → Low:", salaryHighToLowDashboard);


// 9. STATISTICS

let totalEmployees = companyEmployees.length;

let averageCompanySalary =
    totalCompanySalary / totalEmployees;

console.log("\n9. STATISTICS");

console.log(
    "Total Employees :",
    totalEmployees
);

console.log(
    "Total Salary    : ₹" + totalCompanySalary
);

console.log(
    "Highest Salary  : ₹" + highestSalaryEmployee.salary
);

console.log(
    "Average Salary  : ₹" + averageCompanySalary.toFixed(2)
);