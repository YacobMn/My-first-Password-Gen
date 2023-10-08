// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Global Variables 
var numbersOfCharachters;
var finalPassword= "";
var limitPasswordLength;
var numberEnter=12;
var passwordLength;
var addUpperCase;
var addNumbers;
var addSpecialCharacters;
var addLowerCase;
var randomNumber="";
var numbers;

//characters arrays
var specialCharacters = ['!', '@', '#', '$', '%', '&'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// randon number generator
function getARandomNumber(listLength){
  var randomNumber = Math.floor(Math.random() * listLength);
  return randomNumber
}

// If conditions

function limitPasswordLength() {
  if (passwordLength < 12 && passwordLength > 128) {
   alert("invalide Entery Number");
}
else if(numberEnter > 12 && numberEnter < 128) {
  alert("Good number choice!!");
}
 // limitPasswordLength = (passwordLength >= 12 && passwordLength <= 128);
  //return; 
} 



// password generator;
function generatePassword(){
  passwordLength = prompt("whats the password length?")
  addNumbers = confirm("do you want to include numbers?")
  addSpecialCharacters = confirm("do you want to include special characters?")
  addUpperCase = confirm(" do you want to include uppercase?")
  addLowerCase = confirm(" do you want to include lowercase?")

   limitPasswordLength();
  //var upperCase = includeUpperCase();
  //var lowerCase = includeLowerCase();
  //var numbers = numberEnter();
  var allChar = []
  if(addSpecialCharacters){
     allChar = allChar.concat (specialCharacters)
  }
  if (addNumbers){
     allChar = allChar.concat (numbers)
  }
  if (addUpperCase){
     allChar = allChar.concat (upperCase)
  }
  if (addLowerCase){
     allChar = allChar.concat (lowerCase)
  }
  console.log(allChar);

 var finalPassword =""
 for(var i=0; i<passwordLength; i++){
  finalPassword = finalPassword + allChar[getARandomNumber(allChar.length)]
 }

  
  console.log(finalPassword)
  return finalPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

