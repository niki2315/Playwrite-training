/* Data type are two different categories
*Primitive data type and non-Primitive data type */

/* ***************************************
**********PRIMITIVE-DATATYPE***********
*************************************** */
//1. Number ==> number represent number with decimals and without decimal (without quotes)
let num = 123; // number without decimal
num + 10;
console.log(num); //Output: 123

let floatNum = 12.30 //number with decimals
console.log(typeof num); // output: number
console.log(typeof floatNum); // Output: number

//2. String ==> String represent text/ sequence of character wrapped inside a single or double quotes
let str1 = 'Hello World!'; // String with single quote
let str2 = "Hello World!"; //String with Double quote

console.log(typeof str1); //Output : String
console.log(typeof str2); //Output : String

//3. Boolean ==> Boolean represent result of condition : True or False
let isJavascriptFun = true;
let isSkyGreen = false;
console.log(typeof isJavascriptFun) // Output: boolean
console.log(typeof isSkyGreen)// output : boolean

//4. undefined ==> undefined represent a variable that has been declared but not assigned a value.
let underVar;
console.log(typeof underVar); //Output : undefined

//5. NUll ==> null represent an intentional absence of any object value.
let nullVar = null;

//6. symbol ==> symbol represent a unique indentifier.

let countryOfOrigion = Symbol();
let productInfo = {

    productName: "onePlus 9",
    productPrice: 7000,
    [countryOfOrigion]: "china"
};
console.log(productInfo);


/* ***************************************
**********NON-PRIMITIVE-DATATYPE***********
*************************************** */
//1. Object ==> Object represent a collection of key-value pairs.

let empDetails = {

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
//Print employee name
console.log(empDetails.empName); //output : SHIV KUMAR
//Print employee zip code
console.log(empDetails.address.zipcode); //output : 14610
//Print entire employee details
console.log(empDetails);

//2. Array == > Array represent an ordered collection of items.
let fruits = ["Apple","Banana","Mango","Orange"];
let fruitsAndPrice = ["Apple",120,"Banana",60, "Mango",50,"Orange",80];
let fruitsAndPriceAndAvailability = ["Apple",120,true, "Banana",60,true,  "Mango",50, false, "Orange",80, true];

//print banana from fruits array
console.log(fruits[1]); // Output: Banana
// Print price of apple from fruitsAndPrice
console.log(fruitsAndPrice[1]); // Output: 120
// Print Availability of orange from fruitsAndPriceAndAvailability array
console.log(fruitsAndPriceAndAvailability[11]);// Output: true

//3. Function ==> Function represent a block of code defined to perform a particular task.

function launchTheApplication(browserName, url){

    console.log("Launch the Browser: " + browserName);
    console.log("Navigate to URL" + url);
    console.log("Application Lanuched Sucessfully!");


}

// Call the function
launchTheApplication("Chrome", "https://matrix.ginilytics.org/");

//4. Date ==> Date represent date and  time in javascript

let currrentDate = new Date();

// get current year
console.log(currrentDate.getFullYear()); 

// get current month 
console.log(currrentDate.getMonth() + 1);

// get current date
console.log(currrentDate.getDate());

//get current hours
console.log(currrentDate.getHours());

//get current minutes
console.log(currrentDate.getMinutes());

//get current Second
console.log(currrentDate.getSeconds());

//get current Millisecond
console.log(currrentDate.getMilliseconds());

// Get full date with Time stamp
const now = new Date();
console.log(now.toLocaleString()); 

//5. Map ==> Map represent a collection of key-value pairs where keys can be of any data type.

let employeeMap = new Map();
employeeMap.set("empID",101);
employeeMap.set("empName","SHIV KUMAR");
employeeMap.set("havingVisa",true);
employeeMap.set("empName","QA");
//employeeMap.delete("havingVisa");


//Get employee name
console.log(employeeMap.get("empName"));
console.log(employeeMap);
console.log(employeeMap.size);

//6. Set ==> Set represent a collection of unique value of any data type.

let uniqueNumbers = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20);
uniqueNumbers.delete(10);

console.log(uniqueNumbers);
console.log(uniqueNumbers.size)