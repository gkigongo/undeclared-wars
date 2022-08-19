// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  // Because of misinterpretation by JS, special characters do not include the following: " \ '
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  
  alert("Welcome to Secure Password Generator! Press OK to continue.");
  
  // Prompt user for password length and ensure input is a number between 8 and 128. Convert length string into an integer
  const lengthStr = prompt("Select password length (8-128 characters):");
  const length = parseInt(lengthStr);

  //Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  const inclLowercase = confirm("Include lowercase letters? \(OK-yes/Cancel-no\)");
  const inclUppercase = confirm("Include uppercase letters? \(OK-yes/Cancel-no\)");
  const inclNums = confirm("Include numerals 0-9? \(OK-yes/Cancel-no\)");
  const inclSymbols = confirm("Include special characters? \(OK-yes/Cancel-no\)");

  var characters = "";
  if (inclLowercase){
    characters += lowercase;
  }
  if (inclUppercase){
    characters += uppercase;
  }
  if (inclNums){
    characters += numbers;
  }
if (inclSymbols){
  characters += symbols;
  }
  return characters;
}


