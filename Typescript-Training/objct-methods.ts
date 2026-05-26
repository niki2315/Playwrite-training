//1. Object method in typescript

interface empDetails1 {

    empId: number,
    empName: string,
    havingVisa?: boolean,
    address: {
        city: string,
        zipcode: number,
        state: string,
        country: string
        
    }
    role?:string //optional property 
};

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

//2. Accessing object properties
console.log(employeeInfo.empId);
console.log(employeeInfo.address.city);
console.log(employeeInfo["address"]);

//3. Adding new property to the Object
employeeInfo.role = "QA";
console.log(employeeInfo);

//4. Modify existing property of the object 
employeeInfo.role = "Developer";
console.log(employeeInfo);

//5. Delete existing property of the object 
delete employeeInfo.havingVisa;
console.log(employeeInfo);

//6. check whether particular properties are available or not.
console.log("havingVisa" in employeeInfo);
console.log("address" in employeeInfo);

//7. Get all the keys from the object 
console.log(Object.keys(employeeInfo));

//8. Get all the Values from the object 
console.log(Object.values(employeeInfo));

//9. Get all the entries from the object
console.log(Object.entries(employeeInfo));

//10. Itreate through the object properties using for..in loop.
for(let key in employeeInfo){
console.log(key+ " : "+employeeInfo[key as keyof empDetails1])

};

//11. verify the data type of a particular property 
console.log(typeof employeeInfo.empId);
console.log(typeof employeeInfo.empName);
console.log(typeof employeeInfo.havingVisa);

//12. Merge two different objects together

interface empProjectdetails{

    projectID: number,
    ProjectName:string,
    projectLocation: string
}
let empProjectinfo:empProjectdetails= {

    projectID: 501,
    ProjectName: "TypeScript",
    projectLocation: "USA"

};

let mergedemployeeInfo = {...employeeInfo, ...empProjectinfo};
console.log(mergedemployeeInfo);