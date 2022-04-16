// // Assignment code here

// variables for password criteria here

var uCase=["A","B","C","D","E","F","G","H","I","J","L"];
var lCase=["a","b","c","d","e","f"];
var symbol=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"];
var num=["0","1","2","3","4","5","6","7","8","9"];



// function to generate password

function generatePassword() {
  
  // push() user inputs from window promts into empty array.
  var userInput = [];
  // placeholder string for generated password
  var RGpassword = "";


  // prompt user to enter password length between 8 and 128 characters.
  var lengthChoice = window.prompt("How long would you like your password to be?");
    if (lengthChoice < 8 || lengthChoice > 128 || lengthChoice === null || lengthChoice === "") {
      window.alert("Please choose between 1 and 128 characters");
      return lengthChoice;
    }

  // once user inputs number within range, use window.cofirm to log other criteria using else, if.
  // push input to empty array.
    else{
      if(window.confirm("Would you like to include lowercase letters?")){
        Array.prototype.push.apply(userInput, lCase);
      }
      if(window.confirm("Would you like to include uppercase letters?")){
        Array.prototype.push.apply(userInput, uCase);
      }
      if(window.confirm("Would you like to include numbers?")){
        Array.prototype.push.apply(userInput, num);
      }
      if(window.confirm("Would you like to include special characters?")){
        Array.prototype.push.apply(userInput, symbol);
      }
        console.log(userInput);
      if(userInput.length === 0){
        window.alert("You must select at least one criteria for your password. Please try again");
      }
    // once all criteria met, use for loop to generate random password.
        else {
          for(var i = 0; i < lengthChoice; i++){
            var random = Math.floor(Math.random() * userInput.length);
            RGpassword += userInput[random];
            }
        }
    }
  // reference var RGpassword to display in #password element in HTML
  document.getElementById("password").innerHTML = RGpassword;
};
  
// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



