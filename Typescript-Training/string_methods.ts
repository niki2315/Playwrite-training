//string - String is nothing but a collection of charactes written together within the quotations.
 
//1. Create a string
let greeting: string = "Hello World!"; // Double quotes
let farewell : string = 'Goodbye, world'; // single quotes
let templateLiteral : string = `welcome to typescripts`; //backticks
 
console.log(greeting);
console.log(farewell);
console.log(templateLiteral);
 
//advantage with backticks
let name: string = "Alice";
let personalizedGreeting1 : string = "Hello, ${name}! welcome to typescript.";
let personalizedGreeting2 : string = 'Hello, ${name}! welcome to typescript.';
let personalizedGreeting3 : string = `Hello, ${name}! welcome to typescript.`;
 
console.log(personalizedGreeting1);
console.log(personalizedGreeting2);
console.log(personalizedGreeting3);
 
//***********String Method***********/
 
//1. Stroring string value
console.log("1. Stroring string value");
let originalString: string = " Username: Admin | Password : admin123 ";
console.log("Original String: '" +originalString+ "'");
 
 
//2. Calculate the total number of characters available in the string. ==> string.length
console.log("2. Calculate the total number of characters available in the string.");
let stringLength : number = originalString.length;
console.log("Length of the String: " + stringLength);
 
//3. Get the specific character from the string at a specific index. ==> string.charAt(index)
console.log("3. Get the specific character from the string at a specific index.");
let charAtIndex : string = originalString.charAt(5);
console.log("Character at index 5: " +charAtIndex);
 
//reverse the string
let resersedString: string = "";
for (let i = originalString.length -1; i>=0; i--){
 
    resersedString += originalString.charAt(i);
}
console.log("Reversed String: '" + resersedString + "'");
 
//4. Removing unwanted spaces (begining & trailing) from the string. ==> string.trim()
console.log("4. Removing unwanted spaces (begining & trailing) from the string.");
let trimString: string = originalString.trim();
console.log("Original String: '" + originalString+ "'");
console.log("Trimed String : '" +trimString + "'");
 
//5. Removing all the spaces from the string. ==> string.replace(/\s+/g, '')
console.log("5. Removing all the spaces from the string.");
let stringWithoutSpaces : string = originalString.replace(/ /g, '');
console.log("Original String: '" + originalString+ "'");
console.log("String without spaces: '" +stringWithoutSpaces + "'");
 
//6. Removing all the alphabets from the string. ==>string.replace(/\s+/g, '')
console.log("6. Removing all the alphabets from the string.");
let stringWithoutAlphabets: string = originalString.replace(/[a-zA-Z]/g, '');
console.log("Original String: '" + originalString+ "'");
console.log("String Without Alphabets: '" +stringWithoutAlphabets + "'");

//7. Removing all the numbers from the string ==> string.replace(/\s+/g, '')
console.log("7. Removing all the numbers from the string");
let stringWithoutNumbers : string = originalString.replace(/[0-9]/g, '');
console.log("Original String: '" + originalString+ "'");
console.log("String Without Numbers: '" +stringWithoutNumbers + "'");
 
//8. Removing all the special character from the string ==> string.replace(/[^a-zA-Z0-9]/g, '')
console.log("8. Removing all the special character from the string");
let stringWithoutSpecialChar : string = originalString.replace(/[^a-zA-Z0-9 ]/g, '');
console.log("Original String: '" + originalString+ "'");
console.log("String Without Numbers: '" +stringWithoutSpecialChar + "'");
 
//9. Converting the string to Uppercase. ==> string.toUpperCase()
console.log("9. Converting the string to Uppercase.");
let upperCaseString : string = originalString.toUpperCase();
console.log("Original String: '" + originalString+ "'");
console.log("String Without Numbers: '" +upperCaseString + "'");
 
//10. Converting the string to Lowercase. ==> string.toLowerCase()
console.log("9. Converting the string to Lowercase.");
let lowerCaseString : string = originalString.toLowerCase();
console.log("Original String: '" + originalString+ "'");
console.log("String Without Numbers: '" +lowerCaseString + "'");
 
//11. Extracting a part of the string based on the starting and ending index ==> string.substring(startIndex, endIndex)
console.log("11. Extracting a part of the string based on the starting and ending index");
let unsername: string = originalString.substring(12, 17);
let password: string = originalString.substring(31);
console.log("Original String: '" + originalString+ "'");
console.log("Extracting Sub String: '" +unsername+ "'");
console.log("Extracting Sub String: '" +password+ "'");
 
//12. Splitting the string based on a specific seperator ==> string.split(separator)
console.log("12. Splitting the string based on a specific seperator");
let stringParts : string[] = originalString.split(' ');
let user : string = stringParts[3]!;
let pass : string = stringParts[7]!;
console.log("Original String: '" + originalString+ "'");
console.log("Extracted Username: '" +user+ "'");
console.log("Extracted password: '" +pass+ "'");
 
//13. Compare two different strings.
//==== operator for strict equality (case-sensitive)
//== operator for loose equality (case-insensitive)
//include() method for substring presence check
//startwith() method for prefix check
//endWith() method for suffix check
console.log("13. Compare two different strings.");
let stringA : string = "TypeScript";
let stringB : string = "typescript";
console.log("String A: '" +stringA+ "'");
console.log("String B: '" +stringB+ "'");
console.log("Are both string Strictly equal? " +(stringA===stringB)); //Output : false
console.log("TrypeScript contains 'Script'? " + stringA.includes("Script")); //Output : true
console.log("TrypeScript contains 'script'? " + stringA.includes("script")); //Output : false
console.log("TrypeScript starts with 'Type'? " + stringA.startsWith("Type")); //Output :true
console.log("TrypeScript starts with 'Pipe'? " + stringA.startsWith("Pipe")); //Output :false
console.log("TrypeScript ends with 'Script'? " + stringA.endsWith("Script")); //Output :true
console.log("TrypeScript ends with 'Script'? " + stringA.endsWith("Scripts")); //Output :false
 
//14. Data Conversions
// Convert other data type to string. ==> String(value)
// convert string to other data type. ==> parseInt(string), parseFloat(string), Boolean(string)
console.log("14. Data Conversions");
let stdCode : number = 155;
let phone: number = 123456;
let stdCodeString : string = String(stdCode);
console.log(stdCodeString+phone);
 
// I want to verify whether my account is having minimum balance of 10000 or not