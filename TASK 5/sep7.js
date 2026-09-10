//Question no :1

//Example

var name = "santhosh";
var name = "kumar";   

let age = 20;
age = 21;             

const city = "Chennai";

console.log(name);
console.log(age);
console.log(city);

//Question no:2

var x = 10;
var x = 20;

let y = 30;


const z = 50;

console.log(x);
console.log(y);
console.log(z);


//Question no :3

//Q3: What is the output?
{
//var x = 5;
//let y = 10;
//const z = 15;

//x = 20;
//y = 25;
//z = 30;

console.log(x, y, z);
}



//Question no:4

//Q4: What is the difference between declaring and initializing a variable?

//Answer:Declaration means creating a variable without giving it a value.

//Initialization means giving a value to a variable when it is created.

//Example
{
let name;          

name = "SK";   

let age = 20;     

console.log(name);
console.log(age);
}

//Question no:5

//Q5: What will be the output?

//Answer:A variable declared with let but without a value has the value undefined.

//Exaple

let a;
console.log(a);

//Question no:6

//Q6: What is hoisting? Give an example.

//Answer: Hoisting means JavaScript processes certain declarations before executing the code.

//For example, var declarations are hoisted.

//Example

console.log(x);

var x = 10;

//Question:7

//Q7: What is the difference between null and undefined?

//Answer

//undefined means a variable has been declared but has not been assigned a value.

//null means we intentionally give a variable an empty value.

//Example
{
let a;
let b = null;

console.log(a);
console.log(b);
}

//Question no:8

//Q8: What will be the output?

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

//Out put : object, undefined, object, object.

//Question no :9

//Q9: What is the difference between == and ===?

//Answer

//== compares values after performing type conversion if necessary.

//=== compares both value and data type.

//Example

console.log(5 == "5");
console.log(5 === "5");


//Question no :10

//Q10: What is the difference between ++i and i++?

//Answer

//++i — Pre-increment

//First increases the value, then uses it.

//i++ — Post-increment

//First uses the value, then increases it.

//Example

let i = 5;

console.log(++i);
console.log(i);

let j = 5;

console.log(j++);
console.log(j);

//Question no:11

//Q11: What will be the output?
{
let x = 10;
let y = "5";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
}

//Out put : 105, 5, 50, 2

//Question no:12

//Q12: What are logical operators? Explain with examples.

//Answer

//Logical operators are used to combine or reverse conditions.

//There are three main logical operators:

//&& — AND

//Both conditions must be true.

//Example

console.log(10 > 5 && 20 > 10);

//|| — OR

//At least one condition must be true.

//Example

console.log(10 > 20 || 20 > 10);

//! — NOT

//Reverses the result.

//Example

console.log(!(10 > 5));

//Question no :13

//Q13: What will be the output?

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

//Out put: true , true, false

//Question no:14

//Q14: What is the ternary operator?

//Answer

//The ternary operator is a short form of if-else.

//Example
{
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);}

//Question no:15

//Q15: What is the difference between implicit and explicit type casting?

//Answer
//Implicit Type Casting

//JavaScript automatically converts one data type into another.

//Example

let result = "10" - 5;

console.log(result);

//Explicit Type Casting

//The programmer manually converts the type.

//Example

let value = "100";

let number = Number(value);

console.log(number);

//Question no:16

//Q16: What will be the output?

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

//Out put:123
NaN
1
0
false
true

//Question no:17

//Q17: What is NaN?

//Answer

//NaN means Not a Number.

//It occurs when JavaScript tries to perform an invalid numeric conversion or calculation.
{
let result = Number("hello");

console.log(result);
console.log(Number.isNaN(result));
}

//Question no:18

//Q18: What is the difference between if-else and switch?

//Answer

//if-else is useful when you have conditions involving comparisons or ranges.

//Example
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//switch is useful when checking one value against several specific cases.

//Example

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}

//Question no:19

//Q19: What will be the output?

//Example
{
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
}

//Question no:20

//Q20: What is nested if?

//Answer

//A nested if means placing one if statement inside another if statement.

//Example
{
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Not eligible");
}
}

//Question no:21

//Q21: Write a program to check if a number is even or odd using ternary operator.

//Program
{
let number = 10;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);
}

//The Output is Even

//Question

//Q22: What is the difference between while and do-while?

//Answer

//while

//The condition is checked before executing the loop.

//Example
{
let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}}


//do-while

//The loop executes at least once, because the condition is checked after execution.

//Example
{
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 3);
}

//Question

//Q23: What will be the output?

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Output 
1
2
3
4
5

//Question no:24

//Q24: What is the difference between for-of and for-in?

//Answer

//for-of is used to get the values from an iterable such as an array or string.

//Example

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

//Output:Apple, Banana, Mango


//for-in is used to get the keys/indexes.
{
let fruits = ["Apple", "Banana", "Mango"];

for (let index in fruits) {
    console.log(index);
}
}

//Output
0
1
2

//Question no:25

//Q25: Write a program to find the sum of numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Sum =", sum);

//Output:Sum=5050

//Question no:26

//Q26: What is the difference between slice() and splice()?

//Answe
//slice()
//Returns a portion of an array.
//Does not change the original array.

//Example
{
let arr = [1, 2, 3, 4, 5];

let result = arr.slice(1, 4);

console.log(result);
console.log(arr);
}

//splice()

//Can add, remove, or replace elements.

//Changes the original array./

//Example

let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);

console.log(arr);


//Question n0:27

//Q27: What will be the output?
{
let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);
}

//Output:[1, 2, 3]


//Question no:28

//Q28: What is the difference between function declaration and function expression?
//Answer

//Function Declaration

//The function is declared using the function keyword.

//Example

function greet() {
    console.log("Hello");
}

greet();

//Function Expression

//A function is assigned to a variable.
{
let greet = function() {

    console.log("Hello");
};

greet();
}

//Question no:29

//Q29: What is an arrow function?

//Answer

//An arrow function is a shorter way to write a function.

//Example

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

//Question

//Q30: What will be the output?

//Example

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);