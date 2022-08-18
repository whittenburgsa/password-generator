// Assignment code here
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userChosenCharacters = []
  var password = []
  var passwordLength = parseInt(
    prompt("How many characters do you want your password to be? Choose a number between 8 and 128"))
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password cannot be less than 8 or greater than 128 characters")
    return null
  }
  //booleans store true/false if user wants or doesnt want a type of character
  var wantsSpecialCharacter = confirm("click okay to confirm including special characters")
  var lowerCase = confirm("click okay to confirm including lowercase characters")
  var upperCase = confirm("click okay to confirm including uppercase characters")
  var numbers = confirm("click okay to confirm including numbers")

  if (wantsSpecialCharacter === false && lowerCase === false && upperCase === false && numbers === false) {
    alert("must choose at least one option")
    return null
  } //if statements for when user chooses characters
  if (wantsSpecialCharacter) {
    userChosenCharacters = userChosenCharacters.concat(specialCharacters)
    password.push(random(specialCharacters))
  }

  if (lowerCase) {
    userChosenCharacters = userChosenCharacters.concat(lowerCasedCharacters)
    password.push(random(lowerCasedCharacters))
  }

  if (upperCase) {
    userChosenCharacters = userChosenCharacters.concat(upperCasedCharacters)
    password.push(random(upperCasedCharacters))
  }

  if (numbers) {
    userChosenCharacters = userChosenCharacters.concat(numericCharacters)
    password.push(random(numericCharacters))
  }
  var remainingCharacters = passwordLength - password.length
  //for loop filling in remaining characters 
  for (var i = 0; i < remainingCharacters; i++) {
    password.push(random(userChosenCharacters))
  }
  return password.join('')
}
function random(arr) {
  var index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
