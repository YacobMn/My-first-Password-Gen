// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Global Variables 
var numbersOfCharachters;
var upperCase;
var numbers;
var specialCharacters;
var lowerCase;
var finalPassword;
var passWordLength;
var allIncludecharacters;

//characters arrays
var specialCharacters = ['!', '@', '#', '$', '%', '&'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// If conditions

passWordLength = prompt("whats the length of the password? must be (between 8 - 120) ")
if (passWordLength >= 8 && passWordLength <= 128) {
  inputValid = true;
} else {
  alert("passWord must be between 8-12 characters")
}
// what if the password is number in between the numbers?

///................................................

specialCharacters = prompt("you must include specail Characters")
if (specialCharacters === ok){
  inputInvalid = true;
} else{
  alert("you must include special Characters!")
}

specialCharacters = prompt("you must include numbers")
if (specialCharacters === ok){
  inputValid = true
} else {
  alert("numbers must be included")
}

//loop

function getARandomNumber() {
  for (i = 0; i < numbersOfCharachters; i++) {
    var index = Math.floor(math.random() * allIncludecharacters.length)
    fainalpassword += allIncludecharacters[index];
    console.log(passWordResult)
  }
}

// final password num/
function generatePassword() {
  getARandomNumber();
  getARandomNumber();
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
