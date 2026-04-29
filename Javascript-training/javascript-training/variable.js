// JavaScript/TypeScript Variable Declaration

//Data is piece of information which we are going to store for furture reference.
// JS Syntax: Declaration Indentifier = Data;
// TS Syntax: Declaration Indentifier: DataType = Data;

//There are 3 different ways to declare a JavaScript Variable

//Using var 
//Using let 
//Using const

//Where to use JavaScript var? 
//1. Always declare JavaScript variable with var, let or const
//2. The var keyword is used in all JavaScript code from 1995 to 2015
//3. The let and const keywords were added to javascript in 2015
//4. if you want your code to run in older browser, you much use var

// Javascript Let Data type
//1. The let keyword was introduced in ES6 (2015)
//2. Variable  defined with let cannot be redeclared.
//3. veriables defined with let must be declared before use.
//4. variable defined with let have block space

// Cannot be redeclared meaning 
//1. Variables defined with let cannot be redeclared 
//2. you cannot accidentally redeclare a variable 
//3. with let you cannot do this 

//Example
let x ="John"; //JavaS
let x =0; //js

//let x:string ="John";
//let x: number =0;

// Syntax Error: 'x' has already been declared

// With var you can use like
 
var x ="John"; //JavaS
var x =0; //js

//1. Before 2015, javascript has only global scope and function scope
//2. ES6 introduced two important new javascript keyword let and const
//3. these two keywords provide block scope in JS
//4. Variables decleared inside a {} block cannot be accessed from outside the block;

//Example

{
    let x =2;
}
// x can NOT be used here 
//1. variable declared with the var keywords can NOT have block scope
//2. Variables declared inside a {} block can be accessed from outside the block.

//Example
{

    var x =3;
}

// x can be used here

// Redeclaring Variable
//1. Redeclaring a variable using the var keyword can impose problems.
//2. Redeclaring a variable inside a block will also redeclare the variable outside the block;

// Example
var x =10;
// here x is 10

{

    var x =2;
    // here x is 2
}

//1. Redeclaring a variable using the let keywords can solve this problem.
//2. Redeclaring a variable inside a block will not redeclare the variable outside the block

//Example
let x =10;
//here x is 10

{
    let x=2;
    // here x is 2
}
// here x is 10

// Javascript Const

//1. The const keywords was introduced in 2015
//2. Variable defined with const cannot be redeclared.
//3. Variable defined with const cannot be reassigned.
//4. Variable defined with const have block scope

// Javascript const cannot be reassigned
//A const variable cannot be reassigned:

//Example
const PI =31.141;
PI =3.14; //This will give an error
PI = PI+ 10; //This will also give an error

//Javascript Const must be assigned a value when they are declared

//Correct approach
const PI = 3.141;

//Incorrect approach 
const PI;
PI = 3.141;

//When to use JavaScript const?
//As a general rule, always declare a variable with const unless you know that the value will change
// Use const when you declare : 
//1. A new Array
//2. A new Object
//3. A new Function
//4. A new RegExp


