/* Data type are two different categories
*Primitive data type and non-Primitive data type */

/* ***************************************
**********PRIMITIVE-DATATYPE***********
*************************************** */
//1. Number ==> number represent number with decimals and without decimal (without quotes)

let mark:number = 123; // number 
let percentage : number= 95.5// with decimal

console.log("Marks :", mark);
console.log("Percentage : ", percentage);

//2. String ==> String represent text data.

let str1 : string= "SHIV"; // double 
let str2 : string= 'SK'; // single
let str3 : string= `kumar`; // brackets

console.log ("Name 1", str1);
console.log ("Name 2", str2);
console.log ("Name 3", str3);

//3. Boolean

let havingVisa : boolean = true;
let noVisa : boolean= false;

console.log("Passanger is having Visa", havingVisa);
console.log("Passanger is not having Visa", noVisa);

let empAddress :  number | string | boolean
empAddress = "Mohali";
console.log(empAddress);
 
empAddress = 123;
console.log(empAddress);
 
empAddress = true;
console.log(empAddress);

empAddress = "Mohali";
empAddress = 123;
empAddress = true;
console.log("Employee address :", empAddress);

//4. undefined 

let empSalary: undefined | number
console.log("Employee salary is not defined Yet : ", empSalary);

//4. NULL
let empRole : null | string;
empRole = null;
empRole = "Developer";
console.log("What are all the Employee role : ", empRole)

/* ***************************************
**********NON-PRIMITIVE-DATATYPE***********
*************************************** */

//1. Array --> array represent a collection of similar data type.

let fruites : string [] = ["Apple","Banana","Mango","Orange"];
console.log("Fruites are available", fruites);

let fruitesPrice : number[] = [10,20,30,40];
console.log("Fruites Price are", fruitesPrice);

let marketPrice : (string  | number) [] = ["Apple",120,"Banana",60, "Mango",50,"Orange",80];
console.log("Market price of fruites are", marketPrice);
console.log(marketPrice[2],marketPrice[3]);

//2. Object --> Object represent a collection of key-value pairs.

interface empDetails1 {

    empId: number,
    empName: string,
    havingVisa: boolean,
    address: {
        city: string,
        zipcode: number,
        state: string,
        country: string

    }
}

let employeeInfo:empDetails1 = {

empId: 101,
    empName: "SHIV KUMAR",
    havingVisa: true,
    address: {
        city: "New York",
        zipcode: 14610,
        state: "NY",
        country: "USA"

    }    
};

console.log("Employee Details :", employeeInfo.empName);
console.log("Employee City :", employeeInfo.address.city);

//3. tuple --> represent a collection of different data type in a specific order.

let address123 : [string,string,number,boolean] = ["74 Mohali Street", "Panjab", 12345, true];
console.log(address123);

//4. Function --> Function represent a block of code defined to perform a particular task.
// void represent a function that does not return any value ()
// if function returns any value, then same data type should be mentioned in the function defination. (firstname : string): string

function launchTheapplication (browserName : string, url: string):void {

    console.log("Launch the Browser: " + browserName);
    console.log("Navigate to URL" + url);
    console.log("Application Lanuched Sucessfully!");

};

function sumOfNumber (num1 : number, num2 : number): number {
    let num3 = num1 + num2;
    return num3;

}

function getFullName (firstName : string, lastNanme : string): string {

    let fullName : string = firstName + " " + lastNanme;
    return fullName;
}

launchTheapplication ("chrome", "https://matrix.ginilytics.org/");
console.log("Sum of numbers : ", sumOfNumber(10 , 20));
console.log("My Full Name is :", getFullName("SHIV", "KUMAR"));


