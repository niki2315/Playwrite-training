//Array : is a collection of muiltiple values

//1. creating an array 

console.log("1. Creating an Array");
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
console.log(numbers);
console.log(fruits);

//2. Accessing array element
console.log("2. Accessing array element");
console.log(numbers[2]);
console.log(fruits[1]);

//3. Adding additional values to the existing array at the end.
console.log("3. Adding additional values to the existing array at the end.");
numbers.push(6);
console.log(numbers);

//4. Removeing the last element from an array
console.log("4. Removing the last element from an array");
let lastNumber = numbers.pop();
console.log(lastNumber);
console.log(numbers);

// 5. Adding additional value at the beginning of an array
console.log("5. Adding additional value at the beginning of an array");
numbers.unshift(0);
console.log(numbers);

//6. Removing the first element from an array
console.log("6. Removing the first element from an array");
let firstNumber = numbers.shift();
console.log(firstNumber);
console.log(numbers);

//7. Add or remove one or more values within the array from a specific index.
console.log("7. Add or remove one or more values within the array from a specific index.");
let removeNumber = numbers.splice(2, 0, 10, 11);
console.log(removeNumber);
console.log(numbers);

// 8. Creating a new array by extracting a portion of an existing array.
console.log("8. Creating a new array by extracting a portion of an existing array.");
let subArray = numbers.slice(1, 4);
console.log(subArray);

// 9. Merge two or more arrays and create a new array 
console.log("9. Merge two or more arrays and create a new array ");
let number1: number [] = [6,7,8];
let number2: number[] = [9,10,11];
let mergedArray = number1.concat(number2);
console.log(mergedArray); // [6,7,8,9,10,11]

// 10. Finding the index of a specific value in array 
console.log("10. Finding the index of a specific value in array ");
let index = fruits.indexOf('Orange');
console.log(index);
let charryIndex = fruits.indexOf('shiv');
console.log(charryIndex);

// 11. Iterate over values of array
console.log("11. Iterate over values of array");
for (let fruit of fruits){
    console.log(fruit);
}
for (let number of numbers){

    console.log(number);
}

// 12. Reverse the valie within the array.
console.log("12. Reverse the valie within the array.");
numbers.reverse();
console.log(numbers);

// 13. Sort the values within the array.
console.log("13. Sort the values within the array.");
numbers.sort((a,b) => a -b); // Ascending order
console.log(numbers);
numbers.sort((a,b) => b-a); // descending order
console.log(numbers);

// 14. map, filters, foreach methods
// map : create a new array with manipulated values from the original array 
// filter : create a new array with values that meet a specific condition 
// foreach : Execute a provided function once for each array element.
console.log("14. map, filters, foreach methods");
let values: number[] = [1,2,3,4,5];

//map (get square of each and every numbers)
let squareValues = values.map(x => x * x);
console.log(squareValues);

//Filters (get even numbers from the array)
let evenValues = values.filter(x => x % 2 ===0);
console.log(evenValues); // [2,4]

//foreach (Print each value from the array)
values.forEach(x => console.log(x));