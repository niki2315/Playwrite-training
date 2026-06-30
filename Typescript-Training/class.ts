// oops in typescripts 

//Class : Class is a templates or prototype that is very useful to maintain data, functions, and objects together at one place.
// object : An object is an instance of a class
// Constructor : A Constructor is a special method that is called when an object of a class is created. it is used to initialize the properties of the class

// example of class, object and constructor in typescript

// Syntax 

/* class nameofClass {

    //properties
    property1: string; // data members
    property2: number;

    //constructor
    constructor(param1: string, param2: number) {

        this.property1 = param1;
        this.property2 = param2;
    }

    //method
    display(): void {

        console.log("property 1: " + this.property1);
        console.log("property 1: " + this.property2);
    }



} */

// Creating the class to maintain employee data and a couple of function related to that.
class Employee {

    //property
    empName: string = "SHIV KUMAR";
    empID: number = 1234;

    //method
    printEmployeeProjects(name: string): void {

        console.log("Employee Project: " + name);
    }

    //constructor 
    constructor() {

        console.log("Employee class object created");
    }


}

class EmployeeRole {

    emp = new Employee(); //creating object of Employee class inside EmployeeRole class

    //properties
    roleName: string = "Software QA";
    roleID: number = 1289;

    //method 
    printEmployeeRole(role: string): void {
        console.log("Employee ID: " + new Employee().empID); //accessing empID property of Employee Class
        console.log("Employee Name: " + this.emp.empName);  //accessing empName property of Employee Class
        console.log("Employee Role: " + role);

    }

}

//creating object of Employee Class
let obj1 = new Employee(); // Object of class Employee
let obj2 = new EmployeeRole();//Object of class EmployeeRole
console.log("Employee Name:" + obj1.empName);
console.log("Employee ID: " + obj1.empID);
console.log("Employee ROle: " + obj2.roleName);
obj1.printEmployeeProjects("Project A, Project B");
//obj2.printEmployeeRole();