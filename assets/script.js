// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Global Variables 
var numbersOfCharachters;
var finalPassword= "";
var limitPasswordLength;
var numberEnter=12;
var passwordLength;
var upperCase;
var includeNumbers;
var specialCharacters;
var lowerCase;
var randomNumber;
var number;

//characters arrays
var addSpecialCharacters = ['!', '@', '#', '$', '%', '&'];
var numbersEnter = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var includeUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var includeLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var allChar = addSpecialCharacters + includeNumbers + upperCase + lowerCase;

// randon number generator
function randomNumber(){
  var randomNumber = Math.floor(math.random() * 10);
  return;
}

// If conditions

function passWordLength(limitPasswordLength) {
  limitPasswordLength = (passWordLength >= 12 && passWordLength >= 128);
  return; 
} if (numberEnter < 12 && numberEnter > 128) {
  console.log("invalide Entery Number");
}
else if(numberEnter > 12 && numberEnter < 128) {
  console.log("Good number choice!!");
}



// password generator;
function generatePassword(){
  passwordLength = prompt("whats the password length?")
  numberEnter = confirm("do you want to include numbers?")
  addSpecialCharacters = confirm("do you want to include special characters?")
  upperCase = confirm(" do you want to include uppercase?")
  lowerCase = confirm(" do you want to include lowercase?")

  var passwordLength = limitPasswordLength();
  var upperCase = includeUpperCase();
  var lowerCase = includeLowerCase();
  var numbers = numberEnter();
  
  finalPassword =  includeLowerCase + includeNumbers + includeUpperCase + randomNumber;
  finalPassword();
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passowrd;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

