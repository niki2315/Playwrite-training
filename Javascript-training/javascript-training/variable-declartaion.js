//1. Initialization
//2. reassigment
//3. re-declaration
//4. scope

//1. Initialization
const a =10; // must be initialized
let b; // can be initialized later
var c; // can be initialized later

//2. reassigment
//a = 15; //Error : Asiignment to constant variable.
b = 20; // valid

//3. re-declaration
//const a =123; // Error: Identifier 'a' has already been declared
//let b = 30; //  Error: Identifier 'b' has already been declared
var c = 40; // Valid

//4. Scope
{
const x = 50;
let y =60;
var z = 70;

console.log(x);
console.log(y);
console.log(z);

}

console.log(x); //Error :x is not defined
console.log(y); //Error :y is not defined
console.log(z);