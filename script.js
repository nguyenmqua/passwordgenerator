
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



var lettersArray = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
var capitalArray =  ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
var numberArray =  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
var passwordArray = []
var newPasswordArray = []



// Write password to the #password input
function writePassword() {
  var confirmCount = prompt("How many character do you want (8-128)?");
  console.log (confirmCount);
 
  if ( 8 > confirmCount ) { 
    alert("Incorrect amount of character"); return
  }
  else if ( confirmCount > 182){
    alert( "Incorrect amount of character");return
  };

  var confirmCapital = confirm("Click okay to confirm if you want CAPITAL letters in your password");
  console.log (confirmCapital);
  

  var confirmLetter = confirm("Click okay to confirm if you want lower-case letters in your password");
  console.log (confirmLetter);
  

  var confirmCharacter = confirm("Click okay to confirm if you want specialized letters in your password");
  console.log (confirmCharacter);

  var confirmNumber = confirm("Click okay to confirm if you want numbers in your password");
  console.log(confirmNumber);
  
  for (var i = 0; i < confirmCount; i++) {
      if (confirmCapital) {
        var randomCapital = capitalArray[Math.floor(Math.random() * capitalArray.length)];
        console.log (confirmCapital)
      passwordArray.push(randomCapital)
      console.log (passwordArray)}
      else {null};

      if (confirmLetter) {
        var randomLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
      console.log (randomLetter);
      passwordArray.push(randomLetter);
      console.log (passwordArray)}
      else {null};

      if (confirmNumber) {
        var randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
      console.log (randomNumber);
      passwordArray.push(randomNumber);
      console.log (passwordArray)}
      else {null};

    for (var i = 0; i < confirmCount; i++) {
    var newPassword = passwordArray[Math.floor(Math.random() * passwordArray.length)];
    newPasswordArray.push(newPassword);
    console.log (newPassword);
    console.log (newPasswordArray);
    document.getElementById("password").innerHTML = newPasswordArray.join("")
    
    }
  }
}

