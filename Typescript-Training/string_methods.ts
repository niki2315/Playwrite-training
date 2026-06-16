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