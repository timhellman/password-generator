// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharsArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', ',', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', "`", '{', '|', '}', '~'];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var newArray = [];
var finalArray = [];

var userPasswordChoiceLength = prompt("How many characters would you like your password to be?");

userPasswordChoiceLength = parseInt(userPasswordChoiceLength);

console.log(userPasswordChoiceLength);

if (userPasswordChoiceLength < 8 || userPasswordChoiceLength > 128) {
  alert("The character length must be between 8 and 128 - must be a number and can't be blank");
  
}


var userPasswordUppercaseChoice = confirm("Use uppercase letters?");
if (userPasswordUppercaseChoice === true) {
  newArray = newArray.concat(upperCaseArray)
}

console.log(newArray);

var userPasswordLowercaseChoice = confirm("Use lowercase letters?");
if (userPasswordLowercaseChoice === true) {
  newArray = newArray.concat(lowerCaseArray)

}

console.log(newArray);

var userSpecialCharsChoice = confirm("Use special characters?");
if (userSpecialCharsChoice === true) {
  newArray = newArray.concat(specialCharsArray)
}

console.log(newArray);

var userNumbersChoice = confirm("Use numbers?");
if (userNumbersChoice === true) {
  newArray = newArray.concat(numbersArray)
}

console.log(newArray)
var finalString = ""
for (var i = 0; i < userPasswordChoiceLength; i++) {
  finalString = finalString + newArray[Math.floor(Math.random() * newArray.length)]

}
console.log(finalString)  


          //function handleUserUppercase(choice) {
          //  console.log(choice)
          //   if (choice === true) {
          //     for (var i = 0; i < upperCaseArray.length; i++) {
          //       // Final Destination | Action | Content
          //       newArray.push(upperCaseArray[i])
          //     }
          // }



// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

     //}

        // Add event listener to generate button
        //generateBtn.addEventListener("click", writePassword)
