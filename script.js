// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharsArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', ',', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', "`", '{', '|', '}', '~'];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var newArray = [];
var finalArray = [];

function generatePassword() {
  var lengthOK = false;
  var userPasswordChoiceLength;
  while (!lengthOK) {
    userPasswordChoiceLength = +prompt("How many characters would you like your password to be?")
    if (isNaN(userPasswordChoiceLength)) {
      alert("Password length must be provided as a number!");
    }
    else if (userPasswordChoiceLength < 8 || userPasswordChoiceLength > 128) {
      alert("The character amount must be between 8 and 128 characters!")
    }
    else {
      lengthOK = true;
    }
  }
console.log(userPasswordChoiceLength);

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

  var finalArray = ""
  for (var i = 0; i < userPasswordChoiceLength; i++) {
    finalArray = finalArray + newArray[Math.floor(Math.random() * newArray.length)]
  }
  console.log(finalArray);
  return finalArray;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);