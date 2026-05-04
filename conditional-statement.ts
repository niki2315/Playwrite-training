// conditional Stetement : Writing condition along with statements.
// So whenever node.js is going to run the statement, first it is going to check the condition. if the condition satisfies, then only it is going to run the statement.

// there are two different type of conditional statements.

//1. if.. else statement ===> when we don't know the result of the condition before execution.
//2. switch statement ==> when we know the result of condition before execution. now we want to choose one option among muiltiple.

//1. nested if...else statement ==> if...else statement inside another if...elese statement

let percentage: number = 95;

if (percentage >= 85) {

    console.log("Grade A");
    if (percentage >= 90) {

        console.log("distinction");
        console.log("You will get gold medal.");

    } else {
        console.log("Missed distinction by " + (90 - percentage) + "Marks");

    }
} else if (percentage >= 70) {

    console.log("Grade B");
} else if (percentage >= 50) {
    console.log("Grade C");

} else {

    console.log("Sorry Bro, You are Failed");
};

//2. Switch statement ==> When we know the result of condition before execution. Now, we want to choose one option among muiltiple
let env : String = "prod";

switch(env) {
    case "dev":
        console.log("Login into the application with 'dev.google.com'");
        break;
    case "QA":
        console.log("Login into the application with 'qa.google.com'");
        break;
    case "prod":
        console.log("Login into the application with 'prod.google.com'");
        break;
    default:
        console.log("Please provide a valid enviroment");

};