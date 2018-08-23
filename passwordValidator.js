function hasUppercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    }
  }
}

function hasLowercase(input) {
  for (var j = 0; j < input.length; j++) {
    if (input[j] === input[j].toLowerCase()) {
      return true;
    }
  }
}

function isLongEnough(input) {
  if (input.length >= 8) {
    return true;
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
  
  for (var k = 0; k < input.length; k++) {
    for (var l = 0; l < specialCharacters.length; l++) {
      if (input[k] === specialCharacters[l]) {
        return true;
      }
    }
  }
}

function isPasswordValid(input) {
  
  if (!hasUppercase(input)) {
    console.log("The password needs at least one capital letter.");
  }
  
  if (!hasLowercase(input)) {
    console.log("The password needs at least one non-capital letter.");
  }
  
  if (!isLongEnough(input)) {
    console.log("The password needs to include at least 8 characters.");
  }
  
  if (!hasSpecialCharacter(input)) {
    console.log("The password needs at least one special character.");
  }
  
  if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log("The password is valid.");
  }
}

isPasswordValid(""); // enter your password here to get it validated
