// Function Implementation 
// 1. Function without parameter and without return type
// creating a function that is not going to take any input, at the same time it is not going to give you any output data as well 
function helloworld(): void {

    console.log("Hello World!!");
}

helloworld();

//2. Function with parameter and without return type
function shiv(name: string): void {

    console.log("Hello", name);

}
shiv("kumar");
//3. Function with parameter and with return type
function addNumber(a: number, b: number): number {
    return a + b;

};
//call a function 
let sum = addNumber(5, 10);
console.log("SUM OF NUMBER", sum);

//4. 1. Function without parameter with return type
function currentYear(): number {

    let currentDate = new Date();
    return currentDate.getFullYear();

};

//call function 
let year = currentYear();
console.log("Current Year", year);

//5. Function with Optional parameter
function printEmployeeDetails(name: string, age?: number): void {

    if (age !== undefined) {

        console.log("Employee Name" + name + " , Age:", age)
    } else {

        console.log("Employee Name" + name + " , Age: Not given");
    }

}

//call a function 

printEmployeeDetails("shiv", 30);
printEmployeeDetails("SHIV");

//6. Function with default parameter
function printEmployeeinfo(name: string, visaStatus: boolean = false): void {

    console.log("Employee Name: " + name + ", VisaStatus:" + visaStatus);
}
//call a function 
printEmployeeinfo("SHIV", true);
printEmployeeinfo("KUMAR");

//7. Function with rest parameters

function sumOfNumber(...numbers: number[]): void {

    let sum: number = 0;
    for (let num of numbers) {
        sum += num

    }
    console.log("SUM: " + sum);
}

// call a function 
sumOfNumber(1, 2, 3, 4, 5);
sumOfNumber(10, 20);
sumOfNumber(5);