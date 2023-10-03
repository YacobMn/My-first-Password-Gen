// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbersOfCharachters = "10"; 
var includeUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeNumbers = "123456789";
var includeSpecialCharacters= "!@#$%&";

function generatePassword(){
  numbersOfCharachters = prompt("how many characters?")
  includeUpperCase = confirm("do you want numbers?")
  includeNumbers = prompt("do you want numbers")
  includeSpecialCharacters = prompt("do you want special characters")

}
  





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
