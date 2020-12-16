// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //change this back to generatepassowrd()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Aarays of character types
var upperCasedArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P', 'Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCasedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeralsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialSauceArray = ['@', '%', '!', '$', '&', '*'];

function randomize(array) {
  //selects index
var index = Math.floor(Math.random() * array.length)
//converts index to character
var randomCharacter = array[index]
return randomCharacter;
}


function myPasswordFunction() {


    //for length use a prompt() then add conditions
//ie 
var length = parseInt(
prompt('How long do you want your password to be? Password must be greater than 8 and less than 128 characters')
)
//add conditions (greater than 8, less than 128, must be a number

if (length < 8){
alert('Password is too stinkin short')
return;
}
//et al.
if (length > 128){
alert('Password is way too long')
}
//-------////
//for yes or no to character types use confirm();
//stores boolean because clicking "okay" = true, "cancel" = false
var hasSpecialCharacters = confirm(
    'Click OK if you want cool special characters.'
  );

var hasNumbers =  confirm(
'Click okay if you want numbers in this puppy'
);
//et. al.
var hasUpperCase = confirm(
  'Click OK if you want Upper Case letters'
);

var hasLowerCase = confirm(
  'Click OK if you want Lower Case letters'
);

var userAnswers = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumbers: hasNumbers,
  hasUpperCase: hasUpperCase,
  hasLowerCase: hasLowerCase
}

return userAnswers;

}
function generatePassword() {
  var options = myPasswordFunction();
  var randomPassword = [];
  var possibleCharacters = [];
  var required = [];
 

  //says if object value (ie hasSpecialCharacters) is true, use specialSauceArray for possible characters and required
  if (options.hasSpecialCharacters){
    possibleCharacters = possibleCharacters.concat(specialSauceArray)
    required.push(randomize(specialSauceArray))
  }

  // [a, b, d , e]

  if (options.hasNumbers){
    possibleCharacters = possibleCharacters.concat(numeralsArray)
    required.push(randomize(numeralsArray))
  }

  if (options.hasUpperCase){
    possibleCharacters = possibleCharacters.concat(upperCasedArray)
    required.push(randomize(upperCasedArray))
  }

  if (options.hasLowerCase){
    possibleCharacters = possibleCharacters.concat(lowerCasedArray)
    required.push(randomize(lowerCasedArray))
  }

  
  for (var i = 0; i < options.length; i++){
    var possible = randomize(possibleCharacters)

    randomPassword.push(possible)
  }

  
  for (var i = 0; i < required.length; i++){
   randomPassword[i] = required[i] 
  }

return randomPassword.join('')

}





//create for loop to choose password characters
 //for(var i = 0; i <= complexity; i++){
//     password = password + length.charAt(Math.floot(Math.random() * Math.floor(values.length -1)));


//     function getRandomLower() {
//       return String.fromCharCode(Math.floor(Math.randoom() * 26) + 97);
//   }
  
//   function getRandomUpper(){
//       return String.fromCharCode(Math.floor(Math.randoom() * 26) + 65);
//   }
  
//   function getRandomNumber(){
//       return String.fromCharCode(Math.floor(Math.randoom() * 10) + 48);
//   }
  
//   function getRandomSymbol(){
//       const symbols = '!@#$%^&*()<>?';
//       return symbols[Math.floor(Math.random() * symbols.length)]};
//   }
// }