// Assignment Code
var generateBtn = document.querySelector("#generate");

//var charAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002F\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u004A\u005B\u005C\u005D\u005E\u005F\u0060\u007C\u007D\u007E"
var charArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","0123456789","\u0020\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002F\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u004A\u005B\u005C\u005D\u005E\u005F\u0060\u007C\u007D\u007E"]
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charLower = "abcdefghijklmnopqrstuvwxyz"
var charNum = "0123456789"
var charSpecial = "\u0020\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002F\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u004A\u005B\u005C\u005D\u005E\u005F\u0060\u007C\u007D\u007E"


//Pulls Var to JS
var numOfCharInput = document.getElementById("numOfCharInput")
var choice1 = document.getElementById("lowercaseCheckbox")
var choice2 = document.getElementById("uppercaseCheckbox")
var choice3 = document.getElementById("numbersCheckbox")
var choice4 = document.getElementById("specialCharCheckbox")





//Check for clicked Checkboxes

//Generates Password
function generatePassword(length) {
  result = ' ' 
  var characters = []
  var length = +numOfCharInput.value;
  console.log(length)
  var checkedLower = choice1.checked;
  var checkedUpper = choice2.checked;
  var checkedNum = choice3.checked;
  var checkedSpecial = choice4.checked;
  
  if (length < 8 || length > 128){
    result ="Please Choose a Number Between 8 and 128."
  }

  if (checkedLower === true) {
    characters.push(charArray[1]) 
  }

  if (checkedUpper === true) {
    characters.push(charArray[0]) 
  }

  if (checkedNum === true) {
    characters.push(charArray[2])
  }

  if (checkedSpecial === true) {
    characters.push(charArray[3])  
  }

  char = characters.toString()
  
  charactersLength = char.length
  console.log(charactersLength)
  for (i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random(1) * charactersLength))
  }
  //Displays Result
  document.getElementById("password").innerHTML = result
}

//Generate Password Button
generateBtn.addEventListener("click",() => {
  var length = +numOfCharInput.value;
  var checkedLower = choice1.checked;
  var checkedUpper = choice2.checked;
  var checkedNum = choice3.checked;
  var checkedSpecial = choice4.checked;
  console.log(length, checkedLower, checkedUpper, checkedNum, checkedSpecial)
  generatePassword(length)
  
});






