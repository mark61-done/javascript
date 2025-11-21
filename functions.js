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


