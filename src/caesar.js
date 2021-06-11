// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

let alphabet = "";
  function caesar(input, shift, encode = true) {
  //If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.//
  if (!shift || shift > 25 || shift < -25) return false;
  if (!encode) shift *= -1;
  return input.toLowerCase().split('').map(letter => {
    if (letter.charCodeAt(0) < 97) return letter;
    let num = letter.charCodeAt(0) + parseInt(shift);
    if (num > 122) {
      num = num - 26;
    }
    if (num < 97){
      num = num + 26;
    }
    return String.fromCharCode(num)
  }).join('');
  }


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
