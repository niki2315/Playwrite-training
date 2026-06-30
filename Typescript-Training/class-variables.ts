// creating the class to maintain employee data and a couple of functions related to that.

class Employee {

    // before Parameterized constructor

    //Method 1 
    printEmployeeDetails(empID: number, name: string): void {

        console.log("Employee ID: " + empID);
        console.log("Employee Name: " + name);
    }

    // method 2
    printEmployeeProjects(empID: number, projects: string): void {
        console.log("Employee ID: " + empID);
        console.log("Employee Projects: " + projects);

    }
    // Method 3
    printEMployeeRole(empID: number, role: string): void {

        console.log("Employee ID: " + empID);
        console.log("Employee Role: " + role);
    }


}

//creating object of Employee class
let empObj = new Employee();
empObj.printEmployeeDetails(1234, "SHIV");
empObj.printEmployeeProjects(1234, "Project A, Project B");
empObj.printEMployeeRole(1234, "QA");