// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Global Variables 
var numbersOfCharachters = "8 - 128";
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var specialCharacters = "!@#$%&";
var allCharacters = UpperCase + numbers + specialCharacters;



function passWordLength() {
  passWordLength = prompt("passWord length between 8-12 characters:")
  if (passWordLength < 8 && passWordLength > 128) {
    alert('you exceed the limmit number of characters')
    return;
  }
}

function generatePassword() {
  passwordText = prompt("how many characters?")

}
// options displey q

function confirmUpperCase() {
  UpperCasechoice = prompt('would you like to include lower case?');
}

function confirmLowerCase() {
  lowerCase = prompt('would you like to inclde lowercase?');

}

function confirmNumbers() {
  numberOption = prompt('would you like to inlcude number in your password?')
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
