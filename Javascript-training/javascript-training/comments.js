// this is a print statement in javascript, we can print and check the output in the console window
// this is single line comment (control + /)

console.log("Hello, World!");

/* There are different type of logging method available in Javascript
console.info is meant for printing informational message.
console.warn is meant for printing warning message to alert the users.
console.error is meant for printing the error message to indicate something went wrong.
==> short cut to comment muiltiple lines: select the lines and press (shift + alt + A)
 */

console.info("This is an informational Message to User"); // For informational message
console.warn("This is a warning message to alert the users"); // for warning message
console.error("This is a error message"); // For error message


let personDetails = {
  temperature: 25.5,
  hasPlacedOrder: true,
  phoneNumber: "123-456-7890",
  accountBalance: 1000.50,
  email: "john.doe@example.com",
  location: {
    latitude: 37.7749,
    longitude: -122.4194
  },
  isMarried: false,
  occupation: "Software Engineer",
  favouriteColor: "Blue",
  currentYear: 2023,
  followers: 1000000
};
console.log(personDetails.phoneNumber);
console.log("Phone Number:", personDetails.phoneNumber);