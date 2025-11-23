// functions

function add_numbers(){
    let a = 5;
    let b = 10;
    let sum = a + b;
    return sum;
}
sum=add_numbers();
console.log(sum);

const a = 20;

// what is a function
// a function is a block of code designed to perform a particular task
// functions are executed when they are called/invoked
// functions can take parameters/arguments
// functions can return a value
// functions can be defined using function declaration or function expression
// what are parameters/arguments
// parameters are the names listed in the function definition
// arguments are the real values passed to the function

function multiply_numbers(x, y){
    return x * y;
}
let result = multiply_numbers(5, 10);
console.log(result);


// function declaration
function greet(name){
    return "hello " + name;
}
console.log(greet("marko"));

// function expression
const greet2 = function(name){
    return "hi " + name;
}   
console.log(greet2("marko"));

// write a program that checks if a number is even or odd using functions

let number = Number(prompt("enter a number: "));

function check_even_0r_odd(num){
    if(num % 2 == 0){
        return num + " is even";
    }
    else{
        return num + " is odd";
    }
}
console.log(check_even_0r_odd(number));

// write a program that calculates the factorial of a number using functions
let num = Number(prompt("enter a number to calculate its factorial: "));

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
console.log("the factorial of " + num + " is " + factorial(num));

// write a program that checks if a string is a palindrome using functions
let str = prompt("enter a string to check if it is a palindrome: ");
function is_palindrome(s){
    let reversed = s.split("").reverse().join("");
    if(s == reversed){
        return s + " is a palindrome";
    }
    else{
        return s + " is not a palindrome";
    }
}
console.log(is_palindrome(str));

// TASK 1: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that prompts the user to enter the base and height of a triangle and returns its area.

let base = Number(prompt("enter the base of the triangle: "));
let height = Number(prompt("enter the height of the triangle: "));  
function triangle_area(b, h){
    return 0.5 * b * h;
}
console.log("the area of the triangle is " + triangle_area(base, height));

// TASK 2: Using Python or PHP or Java or Ruby or JavaScript
// Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display  either “odd” or “even” to the user.
//  Hint: how does an even / odd number react differently when divided by 2?

let num2 = Number(prompt("enter a number to check if it is even or odd: "));
function even_or_odd(n){
    if(n % 2 == 0){
        return n + " is even";
    }
    else{
        return n + " is odd";
    }
}
console.log(even_or_odd(num2));

// TASK 3: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”

let phone_number = prompt("enter your phone number: ");
function validate_phone_number(number){
    if(number.startsWith("+254")){
        return number;
    }
    else if(number.startsWith("07")){
        return "+254" + number.slice(1);
    }
    else if(number.startsWith("7")){
        return "+254" + number;
    }
    else if(number.startsWith("254")){
        return "+" + number;
    }
    else if(number.startsWith("01")){
        return "+254" + number.slice(1);
    }
    else if(number.startsWith("1")){
        return "+254" + number;
    }
    else{
        return "invalid phone number";
    }
}
console.log("the validated phone number is " + validate_phone_number(phone_number));

// TASK 4: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
// Hint: Check if it contains an “@” symbol and “.” symbol.

let email = prompt("enter your email: ");
function validate_email(e){
    if(e.includes("@") && e.includes(".")){ 
        return e + " is a valid email";
    }
    else{
        return e + " is not a valid email";
    }
}
console.log(validate_email(email));


// TASK 5: Using Python or PHP or Java or Ruby or JavaScript
// Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores them in three variables. Return the largest of the three. Do this without using the the inbuilt max () function!

let num_a = Number(prompt("enter the first number: "));
let num_b = Number(prompt("enter the second number: "));
let num_c = Number(prompt("enter the third number: "));
function largest_of_three(x, y, z){
    if(x >= y && x >= z){
        return x + " is the largest number";
    }
    else if(y >= x && y >= z){
        return y + " is the largest number";
    }
    else{
        return z + " is the largest number";
    }
}
console.log(largest_of_three(num_a, num_b, num_c));

// TASK 6:Using Python or PHP or Java or Ruby or JavaScript
// Write a program that lets the user input a password. Give them only 4 attempts to check the passwords entered against “admin@123”. If the password is correct access is granted. After you show them a message , the account is blocked.

let correct_password = "admin@123";
let attempts = 4;
while(attempts > 0){
    let user_password = prompt("enter your password: ");
    function check_password(pw){
        if(pw === correct_password){
            return "access granted";
        }
        else{
            return "incorrect password";
        }
    }
    let result = check_password(user_password);
    console.log(result);
    if(result === "access granted"){
        break;
    }
    attempts--;
    if(attempts == 0){
        console.log("account is blocked");
    }
    else{
        console.log("you have " + attempts + " attempts left");
    }
}

// TASK 7: Using Python or PHP or Java or Ruby or JavaScript
// Write that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
// A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40

let marks = Number(prompt("enter student marks (0-100): "));
function grade_student(m){
    if(m > 79 && m <= 100){
        return "grade A";
    }
    else if(m >= 60 && m <= 79){
        return "grade B";
    }
    else if(m >= 49 && m <= 59){
        return "grade C";
    }
    else if(m >= 40 && m <= 49){
        return "grade D";
    }
    else if(m < 40 && m >= 0){
        return "grade E";
    }
    else{
        return "invalid marks";
    }
}
console.log(grade_student(marks));

// TASK 8: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

let speed = Number(prompt("enter the speed of the car: "));
function check_speed(s){
    if(s <= 70){
        return "Ok";
    }
    else{
        let points = Math.floor((s - 70) / 5);
        if(points > 12){
            return "License suspended";
        }
        else{
            return "Points: " + points;
        }
    }
}
console.log(check_speed(speed));

// TASK 9: Using Python or PHP or Java or Ruby or JavaScript
// Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
// Example If rows is 5, it should print the following:
// *
// **
// ***
// ****
// *****.....

let rows = Number(prompt("enter the number of rows: "));
function print_stars(r){
    let output = "";
    for(let i = 1; i <= r; i++){
        output += "*".repeat(i) + "\n";
    }
    return output;
}
console.log(print_stars(rows));

// TASK 10: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that calculates the total stock in a company from the array/list below if we know that the stock is the last digit in every array/list.

// prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]

let prods = [['omo','30kshs',300], ['milk','50kshs',200],['bread','45kshs',359], ['coffee','5kshs',79]];
function total_stock(products){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i][2];
    }
    return total;
}
console.log("the total stock is " + total_stock(prods));

// TASK 11: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes the date of birth of a person and the program outputs the age in terms of years,months,days TODAY.datetime

let dob_input = prompt("enter your date of birth (YYYY-MM-DD): ");
function calculate_age(dob){
    let dob_date = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - dob_date.getFullYear();
    let m = today.getMonth() - dob_date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob_date.getDate())) {
        age--;
    }
    return age;
}
console.log("your age is " + calculate_age(dob_input) + " years");

// TASK 12: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that prints the largest of 4 inputs taken as input from a user.

let n1 = Number(prompt("enter the first number: "));
let n2 = Number(prompt("enter the second number: "));
let n3 = Number(prompt("enter the third number: "));
let n4 = Number(prompt("enter the fourth number: "));
function largest_of_four(a, b, c, d){
    let largest = a;
    if(b > largest){
        largest = b;
    }
    if(c > largest){
        largest = c;
    }
    if(d > largest){
        largest = d;
    }
    return largest + " is the largest number";
}
console.log(largest_of_four(n1, n2, n3, n4));

// TASK 13: Using Python or PHP or Java or Ruby or JavaScript or C# or Go
// Write a program that takes the email and password as input from a user and checks if they are equal to “admin@mail.com” and password is “Admin@123” , if so then print  “Login is Successful” and if not print “Invalid username or password”. ONLY accept 3 tries after which it notifies you that you have been blocked.

let correct_email = "admin@mail.com";
let password = "Admin@123";
let attempts_left = 3;
while(attempts_left > 0){
    let user_email = prompt("enter your email: ");
    let user_password = prompt("enter your password: ");
    function check_login(email, password){
        if(email === correct_email && password === correct_password){
            return "Login is Successful";
        }
        else{
            return "Invalid username or password";
        }
    }
    let login_result = check_login(user_email, user_password);
    console.log(login_result);
    if(login_result === "Login is Successful"){
        break;
    }
    attempts_left--;
    if(attempts_left == 0){
        console.log("you have been blocked");
    }
    else{
        console.log("you have " + attempts_left + " attempts left");
    }
}

// TASK 14: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of 2 values and adds them. The program should only accept numbers and floats only or otherwise display an error “invalid character entered” and take the user to re-enter the inputs .

let val1 = prompt("enter the first value: ");
let val2 = prompt("enter the second value: ");
function add_values(v1, v2){
    if(isNaN(v1) || isNaN(v2)){
        return "invalid character entered";
    }
    else{
        return Number(v1) + Number(v2);
    }
}
console.log("the sum is: " + add_values(val1, val2));

// TASK 15: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
// To find the Kenya NHIF Rate using THIS LINK:  

let basic_salary = Number(prompt("enter your basic salary: "));
let benefits = Number(prompt("enter your benefits: "));
function calculate_gross_salary(basic, benefit){
    return basic + benefit;
}
let gross_salary = calculate_gross_salary(basic_salary, benefits);
function calculate_nhif(gross){
    if(gross <= 5999){
        return 150;
    }
    else if(gross <= 7999){
        return 300;
    }
    else if(gross <= 11999){
        return 400;
    }
    else if(gross <= 14999){
        return 500;
    }
    else if(gross <= 19999){
        return 600;
    }
    else if(gross <= 24999){
        return 750;
    }
    else if(gross <= 29999){
        return 850;
    }
    else if(gross <= 34999){
        return 900;
    }
    else if(gross <= 39999){
        return 950;
    }
    else if(gross <= 44999){
        return 1000;
    }
    else if(gross <= 49999){
        return 1100;
    }
    else if(gross <= 59999){
        return 1200;
    }
    else if(gross <= 69999){
        return 1300;
    }
    else if(gross <= 79999){
        return 1400;
    }
    else if(gross <= 89999){
        return 1500;
    }
    else if(gross <= 99999){
        return 1600;
    }
    else{
        return 1700;
    }
}
let nhif_deduction = calculate_nhif(gross_salary);
console.log("your NHIF deduction is: " + nhif_deduction);

// Task 17: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary *  0.015

let nhdf_deduction = gross_salary * 0.015;
console.log("your NHDF deduction is: " + nhdf_deduction);

// Task 18: Using Python or PHP or Java or Ruby or JavaScript
// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 

let nssf_deduction = 200; // assuming a fixed NSSF deduction
let taxable_income = gross_salary - (nssf_deduction + nhdf_deduction + nhif_deduction);
console.log("your taxable income is: " + taxable_income);

// TASK 19: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and find the person's PAYEE using the taxable income above.
// Find the Kenya PAYEE Tax Rate using THIS LINK

function calculate_payee(taxable){
    let payee = 0;
    if(taxable <= 24000){
        payee = taxable * 0.1;
    }
    else if(taxable <= 32333){
        payee = (24000 * 0.1) + ((taxable - 24000) * 0.25);
    }
    else{
        payee = (24000 * 0.1) + (8333 * 0.25) + ((taxable - 32333) * 0.3);
    }
    return payee;
}
let payee_tax = calculate_payee(taxable_income);
console.log("your PAYEE tax is: " + payee_tax);

// Task 20: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

let net_salary = gross_salary - (nhif_deduction + nhdf_deduction + nssf_deduction + payee_tax);
console.log("your net salary is: " + net_salary);






