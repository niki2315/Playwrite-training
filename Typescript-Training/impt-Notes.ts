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

This is exactly how developers and testers analyze code.*/
