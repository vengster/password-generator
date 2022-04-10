// Assignment code here
//
var uCase=["A","B","C","D","E","F","G","H","I","J","L"];
var lCase=["a","b","c","d","e","f"];
var sChar=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"];
var num=["0","1","2","3","4","5","6","7","8","9"];


function generatePassword() {
  var promptLength = window.prompt("How long would you like your password to be?");
  if (promptLength < 8 || promptLength > 128) {
    window.alert("Please choose between 1 and 128 characters");
    console.log(promptLength);
    return generatePassword();
  }
  else{
    console.log(promptLength);
  }
  
  var confirmLcase = window.confirm("Would you like to include lowercase letters?");
    if(confirmLcase) {
      var randomLcase = lCase[Math.floor(Math.random()*lCase.length)];
        console.log(randomLcase);
      }
      
   
  var confirmUcase = window.confirm("Would you like to include uppercase letters?");
      var randomUcase = uCase[Math.floor(Math.random()*uCase.length)];
      console.log(randomUcase);

  var confirmSpecial = window.confirm("Would you like to include special characters?");
    if(confirmSpecial){
      var randomScase = sChar[Math.floor(Math.random()*sChar.length)];
      console.log(randomScase);
    }
  var confirmNumber = window.confirm("Would you like to include numbers?");
    if(confirmNumber){
      var randomNum = num[Math.floor(Math.random()*num.length)];
      console.log(randomNum);
    }
 }


//document.getElementById("generate")



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

