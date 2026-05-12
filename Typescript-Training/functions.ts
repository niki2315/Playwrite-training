//Function in typescript

//javascript or typescript supports three commonly used fucntion styles: 

//1. Named Function
//2. Arrow function/lambda function 
//3. Anonymous function

//1. Named function 
//Named function are nothing but the function that are declared explicitly with some name.

//systax:
// function functionName (parameter):returntype {

// function body

//}

function greetThePerson(name: string): string {

    return "Hello, " + name + " !Good Morning.";

};

function printTheGreeting(name: string): void {

    console.log("Hello, " + name + " !Good Morning.");

}


let greetMsg = greetThePerson("shiv");
console.log(greetMsg);
printTheGreeting("Gurwinder")

//2. Arrow function/lambda function 
// Arrow function are a more concise syntax for writing function expression. they are often used for short function or as callbacks.

//syntax
//let functionName = (parameter): returntype ==> {

// function body

//}

// calculate the sum of two number and return the output in the form of a number.

//regular function
function sum(a: number, b: number): number {
    let c: number = a + b;
    return c;
}

//Arrow function 
let sumOfNumber = (a: number, b: number): number => a + b;
console.log(sumOfNumber(1, 2));

//regular Function 
// calculate the square of number and retuen the output in the form of a number 
function square(a: number): number {

    let b: number = a * a;
    return b;

}
//Arrow function 
let squareofNumber = (a: number): number => a * a;
console.log(squareofNumber(2));


//3. Anonymous function
// Anonymous function are function that are defined without a name. they are often used as argument to other functiona or assigned to variables.

// Syntax :
// let functionName = function(parameter) : returnType {
// function body
//}

// syntax : function as parameter of another function
// function outerFunction(paramFunction : functionType): returnType {
// function body
//}

// Example: using an Anonymous function as parameter of another function

function run(greet: (name: string) => void): void {

    greet("SHIV");

};
function printName(name: string): void {

    console.log("Hello, " + name + " !First.");
}

//calling a function 
run(
    function (name: string): void {
        console.log("Hello, " + name + " !Second.");

    }


)
printName("Ginilytics");


function helloWorld():void {

    
}