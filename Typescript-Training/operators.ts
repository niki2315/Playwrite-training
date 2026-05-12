//Operator --> Operator are special character that we are going to use to perform different type of operations in JS and TS

// There are mainly 5 different type of operators in TS and JS

//1. Arithmetic Operator
//2. Assignment Operator
//3. Comparision Operator
//4. Logical Operator
//5. Conditional (Ternary) Operator

//1. Arithmetic Operator - These operator are used to perform Mathmatical operations
// + Addition 
// - Subtraction
// * Muiltipication
// / Division 
// % Modules
//  ++ Increment (x++ ==> Post Increment, ++x ==> pre increment)
//  -- decrement (x-- ==>Post decrement, --x ==> pre decrement)

let a: number = 10;
let b: number = 5;

console.log("Addition : " + (a + b)); // 15
console.log("Subtraction : " + (a - b)); // 5
console.log("Muiltipication : " + (a * b)); //50
console.log("Division : " + (a / b)); //2
console.log("Modules : " + (a % b)); // 0
console.log("Post Increment: " + (a++)); //10
console.log("After next line of post Increment: " + (a)); // 11 (Wrong)
console.log("Pre Increment: " + (++b)); // 6 Nitika (Wrong) 
console.log("post decrement: " + (a--)); // 10 (G)
console.log("After next line of post decrement: " + (a)); 11 //  
console.log("Pre decrement: " + (--b)); // 4

//2. Assignment Operator ==> These operator are used to assign a value to variable.
// = Assignment
// += Addition Assignment
// -= Subtraction Assignment
// *= Muiltipication Assignment
// / = Division Assignment
// % = Module Assignment

let c: number = 20;
c += 10; // c = c + 10 
console.log("Addition Assignment: " + c);

c -= 5; // c = c - 5 
console.log("Subtraction Assignment: " + c);

c *= 2; // c = c * 2
console.log("Muiltipication Assignment: " + c);

c /= 5; // c = c/5
console.log("Division Assignment: " + c);

c %= 3; // c = c% 3
console.log("Module Assignment: " + c);

// Comparision operator : These operator are used to compare two values

// == Equal to (loose equality)
// === Strict equal to
// != not equal to (loose inequality)
// !== Strict not equal to
// > greater than
// < less than 
// >= greater than or equal to 
// <= less than or equal to

let x: number = 10;
let y: any = '10';

console.log("Equal to (loose) :" + (x == y));
console.log("Strict equal to :" + (x === y));
console.log("not equal to :" + (x != y));
console.log("Strict not equal to :" + (x !== y));
console.log("Greater then : " + (x > 5));
console.log("less than  : " + (x < 15));
console.log("greater than or equal to  : " + (x >= 10));
console.log("less than or equal to  : " + (x <= 20));

//4. Logical Operator ==> These operator are used to combine muiltiple conditions

//&& Logical AND
// || Logical OR
// ! Logical NOT

let i: number = 10;
let j: number = 20;

console.log("Logical AND : " + (i > 5 && j > 15)) // True and true = True
console.log("Logical OR : " + (i > 15 || j > 15)) // false or true = True
console.log("Logical NOT : " + !(i > 5)) // not true = False

//5. Conditional (Tenary) Operator : This operator is used to evalute a condition and return one of two values besed on the result of the conditions.

// condition ? valueIfTrue : valueIfTrue

let age: number =20;
let canVote : String = (age >= 18) ? "Yes, you can vote. " : "No, you cannot vote";
console.log ("Can vote: " + canVote);