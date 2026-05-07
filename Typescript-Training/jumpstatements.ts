//Jumping statement in Typescript

//1. break
//2. continue
//3. return
//4. throw

//1.  break == > It is used to terminate the loop when condition is met.

// noraml for loop to print number from 1 to 5

for (let i: number = 1; i <= 5; i++) {

    console.log(i);


}

// for loop with break statement to terminate the loop when i equal 3
console.log("For Loop Using the break statement");
for (let i: number = 1; i <= 5; i++) {

    if (i === 3) {

        break; // terminate the loop when i equal 3
    }

    console.log(i); //1,2

};

//2. continue statement => it is used to skip the current iteration of the loop when condition is met.
// for loop with continue statement to skip the iteration when i equal 3

console.log("For Loop Using the continue statement");
for (let i: number = 1; i <= 5; i++) {

    if (i === 3) {

        continue; // skip the iteration when i equal 3
    }

    console.log(i); //1,2,4,5

};

//3. return statement ==> it is used to exit from the function and optionally return a value.

function addNumber(a: number, b: number): number {

return a + b; // exit from funtion and return the sum of a and b
console.log("Test", (addNumber)); // This line will not executed because return statement exists the function.


};
let sum : number = addNumber(5,10);
console.log("SUM : ",  sum); 

//4. throw statement ==> it is used to throw an exception when an error occurs.

function withDrawAmount (amount:number){
    if(amount<=0){

        throw new Error("Invalid amount. Amount should be greater than zero.")
        
    }
    console.log("Amount withdrawn: ", amount);

}
withDrawAmount(100)// 
withDrawAmount(-50)// 