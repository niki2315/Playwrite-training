/*# TypeScript - Type Inference Notes

## What is Type Inference?

TypeScript automatically identifies the data type based on the assigned value.

Example:

```typescript
let name = "Nikita";
```

TypeScript internally understands:

```typescript
let name: string = "Nikita";
```

### Why?

Because the assigned value `"Nikita"` is a string.

### Output

No output because we are only creating a variable.

---

Example:

```typescript
let age = 29;
```

TypeScript internally understands:

```typescript
let age: number = 29;
```

### Why?

Because `29` is a number.

---

Example:

```typescript
let isActive = true;
```

TypeScript internally understands:

```typescript
let isActive: boolean = true;
```

### Why?

Because `true` is a boolean value.

---

Example:

```typescript
let city = "Mohali";

city = "Delhi";
```

### Will it work?

Yes ✅

### Why?

* TypeScript inferred `city` as string.
* `"Delhi"` is also a string.
* String can be reassigned to a string variable.

---

Example:

```typescript
let city = "Mohali";

city = 100;
```

### Will it work?

No ❌

### Why?

* TypeScript inferred `city` as string.
* `100` is a number.
* Number cannot be assigned to a string variable.

Error:

```typescript
Type 'number' is not assignable to type 'string'
```

---

## Arithmetic Operators

### Addition (+)

```typescript
let a = 10;
let b = 20;

console.log(a + b);
```

### Calculation

```typescript
10 + 20 = 30
```

### Output

```typescript
30
```

### Why?

The `+` operator adds two numbers.

---

### Subtraction (-)

```typescript
let a = 20;
let b = 10;

console.log(a - b);
```

### Calculation

```typescript
20 - 10 = 10
```

### Output

```typescript
10
```

### Why?

The `-` operator subtracts the second value from the first value.

---

### Multiplication (*)

```typescript
let a = 8;
let b = 3;

console.log(a * b);
```

### Calculation

```typescript
8 × 3 = 24
```

### Output

```typescript
24
```

### Why?

The `*` operator multiplies two numbers.

---

### Division (/)

```typescript
let a = 20;
let b = 5;

console.log(a / b);
```

### Calculation

```typescript
20 ÷ 5 = 4
```

### Output

```typescript
4
```

### Why?

The `/` operator divides the first number by the second number.

---

### Modulus (%)

```typescript
let a = 10;
let b = 3;

console.log(a % b);
```

### Calculation

```typescript
10 ÷ 3 = 3
Remainder = 1
```

### Output

```typescript
1
```

### Why?

The `%` operator returns the remainder after division.

---

## Comparison Operators

### == (Loose Equality)

```typescript
console.log(10 == "10");
```

### Output

```typescript
true
```

### Why?

* `==` compares only values.
* JavaScript converts `"10"` (string) into `10` (number).
* Then comparison becomes:

```typescript
10 == 10
```

Result:

```typescript
true
```

---

### === (Strict Equality)

```typescript
console.log(10 === "10");
```

### Output

```typescript
false
```

### Why?

`===` checks:

1. Value
2. Data Type

Comparison:

```typescript
10      // number
"10"    // string
```

Types are different.

Result:

```typescript
false
```

---

### Greater Than (>)

```typescript
console.log(20 > 15);
```

### Output

```typescript
true
```

### Why?

20 is greater than 15.

---

### Greater Than Equal To (>=)

```typescript
console.log(10 >= 10);
```

### Output

```typescript
true
```

### Why?

`>=` means greater than OR equal to.

10 is equal to 10.

Therefore result is true.

---

## Golden Rule

Whenever you see a program:

### Step 1

Check variable type.

### Step 2

Check operator used.

### Step 3

Perform calculation/comparison.

### Step 4

Predict output.

This is exactly how developers and testers analyze code.
# TypeScript Notes – Logical Operators & Conditional Statements

## Logical Operators

Logical operators multiple conditions ko check karne ke liye use hote hain.

---

### 1. AND (&&)

**Rule:** Dono conditions true honi chahiye.

Example:

```typescript
console.log(true && true);
```

Output:

```typescript
true
```

Why?

* First value = true
* Second value = true
* Dono true hain

Result = true

---

Example:

```typescript
console.log(true && false);
```

Output:

```typescript
false
```

Why?

* Ek value false hai
* AND operator mein dono values true honi chahiye

Result = false

---

### AND Truth Table

| Value 1 | Value 2 | Result |
| ------- | ------- | ------ |
| true    | true    | true   |
| true    | false   | false  |
| false   | true    | false  |
| false   | false   | false  |

---

### 2. OR (||)

**Rule:** Koi ek condition true ho to result true.

Example:

```typescript
console.log(false || true);
```

Output:

```typescript
true
```

Why?

* Ek value true hai
* OR operator mein ek bhi true ho to result true

---

Example:

```typescript
console.log(false || false);
```

Output:

```typescript
false
```

Why?

* Dono values false hain

---

### OR Truth Table

| Value 1 | Value 2 | Result |
| ------- | ------- | ------ |
| true    | true    | true   |
| true    | false   | true   |
| false   | true    | true   |
| false   | false   | false  |

---

### 3. NOT (!)

**Rule:** Opposite value return karta hai.

Example:

```typescript
console.log(!true);
```

Output:

```typescript
false
```

Why?

* NOT operator true ko false bana deta hai.

---

Example:

```typescript
console.log(!false);
```

Output:

```typescript
true
```

Why?

* NOT operator false ko true bana deta hai.

---

## Conditional Statements

Conditional statements tab use hote hain jab hume condition ke basis par decision lena ho.

---

## 1. if Statement

Syntax:

```typescript
if(condition){
   // code
}
```

Example:

```typescript
let age = 20;

if(age >= 18){
   console.log("Adult");
}
```

Step 1:

```typescript
20 >= 18
```

Result:

```typescript
true
```

Step 2:

Condition true hai.

Output:

```typescript
Adult
```

---

Example:

```typescript
let age = 15;

if(age >= 18){
   console.log("Adult");
}
```

Condition:

```typescript
15 >= 18
```

Result:

```typescript
false
```

Output:

```typescript
No Output
```

Why?

* if block sirf true hone par execute hota hai.

---

## 2. if-else Statement

Syntax:

```typescript
if(condition){
   // code
}
else{
   // code
}
```

Example:

```typescript
let age = 15;

if(age >= 18){
   console.log("Adult");
}
else{
   console.log("Minor");
}
```

Condition:

```typescript
15 >= 18
```

Result:

```typescript
false
```

Output:

```typescript
Minor
```

Why?

* if condition fail ho gayi.
* else block execute hua.

---

## 3. else-if Statement

Use when multiple conditions need to be checked.

Syntax:

```typescript
if(condition1){
}
else if(condition2){
}
else{
}
```

---

Example:

```typescript
let marks = 75;

if(marks >= 90){
   console.log("A");
}
else if(marks >= 70){
   console.log("B");
}
else{
   console.log("C");
}
```

Step 1:

```typescript
75 >= 90
```

Result:

```typescript
false
```

Step 2:

```typescript
75 >= 70
```

Result:

```typescript
true
```

Output:

```typescript
B
```

---

### Important Rule

Jaise hi koi condition true milti hai:

```typescript
else if
```

chain wahi stop ho jaati hai.

Neeche wali conditions check nahi hoti.

---

## Difference Between if and else-if

### Multiple if

```typescript
let marks = 95;

if(marks >= 90){
   console.log("A");
}

if(marks >= 70){
   console.log("B");
}
```

Output:

```typescript
A
B
```

Why?

* Dono if statements alag hain.
* Dono conditions true hain.

---

### else-if

```typescript
let marks = 95;

if(marks >= 90){
   console.log("A");
}
else if(marks >= 70){
   console.log("B");
}
```

Output:

```typescript
A
```

Why?

* First condition true ho gayi.
* else-if execute nahi hua.

---

## 4. switch Statement

Use when comparing a variable with multiple fixed values.

Syntax:

```typescript
switch(variable){

   case value1:
      // code
      break;

   case value2:
      // code
      break;

   default:
      // code
}
```

---

Example:

```typescript
let day = 2;

switch(day){

   case 1:
      console.log("Monday");
      break;

   case 2:
      console.log("Tuesday");
      break;

   default:
      console.log("Invalid");
}
```

Output:

```typescript
Tuesday
```

Why?

* day = 2
* case 2 matched
* break executed

---

## break Keyword

Purpose:

```text
Stop switch execution
```

Example:

```typescript
case 2:
   console.log("Tuesday");
   break;
```

After break:

```text
Switch stops
```

---

## switch Without break

Example:

```typescript
let day = 2;

switch(day){

   case 1:
      console.log("Monday");

   case 2:
      console.log("Tuesday");

   case 3:
      console.log("Wednesday");

   default:
      console.log("Invalid");
}
```

Output:

```typescript
Tuesday
Wednesday
Invalid
```

Why?

* case 2 matched
* break missing
* execution continued to next cases

This is called:

```text
Fall Through
```

---

## Important Interview Points

### AND (&&)

* All conditions must be true.

### OR (||)

* At least one condition must be true.

### NOT (!)

* Reverses the value.

### if

* Executes only when condition is true.

### if-else

* One block always executes.

### else-if

* Used for multiple conditions.

### switch

* Used for fixed value comparisons.

### break

* Stops switch execution.

### Fall Through

* Happens when break is not used.

### Condition False vs Error

Condition False:

```typescript
if(age >= 18)
```

Result:

```typescript
false
```

Output:

```text
No Output
```

Error nahi aayegi.

Error Example:

```typescript
let age = 25;

age = "30";
```

Output:

```text
Type Error
```

Because number variable mein string assign ki gayi hai.
// =====================================
// TypeScript Loops
// =====================================


// =====================================
// 1. What is Loop?
// =====================================

// Loop ka use ek hi code ko baar-baar execute karne ke liye hota hai.

// Without Loop:

console.log(1);
console.log(2);
console.log(3);


// Same kaam loop se:

for(let i = 1; i <= 3; i++){
    console.log(i);
}


// Output:
// 1
// 2
// 3


// Explanation:
// i = 1 se start hua
// Condition check hui i <= 3
// True hone par print hua
// i++ se value increase hui
// Jab i = 4 hua condition false ho gayi
// Loop stop ho gaya



// =====================================
// 2. for Loop
// =====================================

// Syntax:

// for(initialization; condition; increment){
//      code
// }


// Example:

for(let i = 1; i <= 5; i++){

    console.log(i);

}


// Output:

// 1
// 2
// 3
// 4
// 5


// Step by Step:

// Step 1:
// let i = 1
// Loop start hua


// Step 2:
// i <= 5 check hua

// 1 <= 5 true
// print 1


// Step 3:
// i++

// i ki value:
// 1 se 2


// Ye process repeat hota hai


// Jab:

// i = 6

// Condition:

// 6 <= 5

// false

// Loop stop



// =====================================
// 3. Increment Operator (++)
// =====================================


// i++ ka matlab:

// i = i + 1


let number = 5;

number++;

console.log(number);


// Output:

// 6



// =====================================
// 4. Decrement Operator (--)
// =====================================


// i-- ka matlab:

// i = i - 1


let value = 5;

value--;

console.log(value);


// Output:

// 4



// =====================================
// 5. Reverse Loop
// =====================================


for(let i = 5; i >= 1; i--){

    console.log(i);

}


// Output:

// 5
// 4
// 3
// 2
// 1



// =====================================
// 6. Difference between < and <=
// =====================================


// <= value ko include karta hai


for(let i = 1; i <= 5; i++){

    console.log(i);

}


// Output:

// 1
// 2
// 3
// 4
// 5



// < value ko include nahi karta


for(let i = 1; i < 5; i++){

    console.log(i);

}


// Output:

// 1
// 2
// 3
// 4




// =====================================
// 7. break Statement
// =====================================


// break ka use loop ko completely stop karne ke liye hota hai.


for(let i = 1; i <= 5; i++){

    if(i === 3){

        break;

    }

    console.log(i);

}


// Output:

// 1
// 2


// Explanation:

// i = 1 print hua
// i = 2 print hua
// i = 3 hua
// condition true hui
// break execute hua
// poora loop stop ho gaya




// =====================================
// 8. continue Statement
// =====================================


// continue sirf current iteration ko skip karta hai.
// Loop aage continue hota hai.


for(let i = 1; i <= 5; i++){

    if(i === 3){

        continue;

    }

    console.log(i);

}


// Output:

// 1
// 2
// 4
// 5



// Explanation:

// i = 3 par continue laga
// 3 print nahi hua
// baki values print hui




// =====================================
// 9. Infinite Loop
// =====================================


// Jab loop kabhi stop nahi hota use infinite loop kehte hain.


let i = 1;

while(i <= 5){

    console.log(i);

}


// Problem:

// i ki value change nahi ho rahi
// condition hamesha true rahegi
// loop kabhi end nahi hoga



// =====================================
// 10. while Loop
// =====================================


// while loop mein pehle condition check hoti hai
// phir code execute hota hai


let count = 1;


while(count <= 5){

    console.log(count);

    count++;

}


// Output:

// 1
// 2
// 3
// 4
// 5



// Step:

// count = 1

// Condition:

// 1 <= 5 true

// print 1

// count++

// count = 2

// Repeat...




// =====================================
// 11. do-while Loop
// =====================================


// do-while mein pehle code execute hota hai
// phir condition check hoti hai


let num = 1;


do{

    console.log(num);

    num++;

}
while(num <= 3);



// Output:

// 1
// 2
// 3




// =====================================
// 12. while vs do-while
// =====================================


// while:

// condition → code


// do-while:

// code → condition



// Example:


let a = 10;


while(a <= 5){

    console.log(a);

}


// Output:

// No Output

// Kyunki condition false thi



let b = 10;


do{

    console.log(b);

}
while(b <= 5);


// Output:

// 10


// Kyunki do block ek baar execute hota hai




// =====================================
// Interview Key Points
// =====================================


// for loop:
// Jab iterations pata ho


// while loop:
// Jab condition pata ho


// do-while:
// Jab code minimum ek baar run karna ho


// break:
// Poora loop stop


// continue:
// Current iteration skip


// Infinite loop:
// Jab condition kabhi false na ho






*/
