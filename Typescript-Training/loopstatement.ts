// Loop  statement ==> Loop the statements or repeat the execution of statements muiltiple times based on the condition given.

// 1. for loop - we know the total number of iteration to be executed before itself, we use for loop
//2. while loop - we don't know the total number of iteration to be executed before itself, we use for while loop

/* //1. for loop 
// syntax : 
// for (condition-to-start; condition-to-end; increment/decrement)
{
    //statement

}

// example : Print the name Ginilytics for 10 times using the for loop 

let companyName: string = "Ginilytics";
for (let i: number = 1; i <= 10; i++) {

    console.log(i + companyName);
};

//2. while loop
// syntax:
// while(condition) 
{

    //statements
}

// example : refresh the page until the application is launched successfully

let counter: number = 1;
while (counter > 0) {

    let isPageLoaded : boolean = false; // assume this value is coming from application
    if (isPageLoaded || counter ===10){
        break;

    }
    console.log("refresh the page");
    counter++;
} */

/* //3. Do..while loop (special type of while loop)

let i: number = 0;
while(i>0){
    console.log("Ginilytics");
    i++;
}
do{
    console.log("Ginilytics");
    i++;

}while(i>0);
 */

//4. for..of..loop ==> Iterate over each and every value of the predefined list (array,set,map)

let fruits : string[] =  ["Apple","Banana","Mango","Orange"];

for (let i: number = 0; i < fruits.length; i++){
    console.log(fruits[i]);

}

// for..of loop 
//systax 
// for (varibale of pre-defined-list){
 // statement
//}

for (let fruit of fruits) {

    console.log(fruit);
}

//Map ==> 

let employeeMap : Map <string, string> = new Map();
employeeMap.set("empID", "101");
employeeMap.set("empName","SHIV");
employeeMap.set("havingVisa","true");
employeeMap.set("empName","Kumar");

 employeeMap.keys();
employeeMap.values();

for (let empDetails of  employeeMap){

    console.log(empDetails);
}

//5. for..in..loop : Inerate over each abd every key of the predefined object
// object ==> 

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

console.log(employeeInfo["empId"]);

//systax: 
//for (key in predefined-object){
    //statement
//}

for (let key in employeeInfo){

    console.log(key);
    console.log(employeeInfo[key as keyof empDetails1]);
};