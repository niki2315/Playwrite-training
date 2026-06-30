// creating the class to maintain employee data and a couple of functions related to that.

class Employee {

    empID : number;

    //After Parameterized constructor
    constructor(id: number,empName?: string, empProjects?:string, empRole?: string){

        this.empID =id // this keyword is used to refer to the current class instance
    }

    //Method 1 
    printEmployeeDetails(name: string): void {

        console.log("Employee ID: " + this.empID);
        console.log("Employee Name: " + name);
    }

    // method 2
    printEmployeeProjects(projects: string): void {
        console.log("Employee ID: " + this.empID);
        console.log("Employee Projects: " + projects);

    }
    // Method 3
    printEMployeeRole(role: string): void {

        console.log("Employee ID: " + this.empID);
        console.log("Employee Role: " + role);
    }


}
// creating object of employee class
let empObj = new Employee(1234,"SHIV", "Project A, Project B", "QA"); // object of class Employee
empObj.printEmployeeDetails("SHIV");
empObj.printEmployeeProjects("Project A, Project B");
empObj.printEMployeeRole("QA");
