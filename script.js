//array for password

var lettersArray = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
var captialArray =  ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var letterCount = prompt("How many character do you want (8-128)?");
  console.log (letterCount);
  var capitalLetter = confirm("Click okay to confirm if you want capital letters in your password");
  console.log (capitalLetter)
  var specialCharacter = confirm("Click okay to confirm if you want specialized letters in your password");
  console.log (specialCharacter)
  var numberCharacter = confirm("Click okay to confirm if you want numbers in your password");
  console.log(numberCharacter)


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

