// // Assignment code here
// //
// var uCase=["A","B","C","D","E","F","G","H","I","J","L"];
// var lCase=["a","b","c","d","e","f"];
// var sChar=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"];
// var num=["0","1","2","3","4","5","6","7","8","9"];



var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

//var lengthEl = document.getElementById('length');





function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}
console.log(getRandomLower());

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}
console.log(getRandomUpper());

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol(){
  return String.fromCharCode(Math.floor(Math.random()*15) + 33);
}
console.log(getRandomSymbol());






var lengthChoice = window.prompt("How long would you like your password to be?");
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Please choose between 1 and 128 characters");
  }
  else{
    console.log(lengthChoice);
}


var confirmLcase = window.confirm("Would you like to include lowercase letters?");
if(confirmLcase) {
  getRandomLower();
  console.log(getRandomLower());
}
else{
  console.log(confirmLcase);
}

var confirmUcase = window.confirm("Would you like to include uppercase letters?");
  if(confirmUcase) {
    getRandomUpper();
    console.log(getRandomUpper());
  }
  else{
    console.log(confirmUcase);
  }

var confirmSymbol = window.confirm("Would you like to include special characters?");
  if(confirmSymbol){
    getRandomSymbol();
    console.log(getRandomSymbol());
  }
  else{
    console.log(confirmSymbol);
  }
    
var confirmNumber = window.confirm("Would you like to include numbers?");
if(confirmNumber){
  getRandomNumber();
  console.log(getRandomNumber());
  }
  else{
    console.log(confirmNumber);
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
