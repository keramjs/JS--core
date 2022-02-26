let munstersDescription = "The Munsters are creepy and spooky.";

function changeCases(letter) {
  if (letter.match(/[A-Z]/)) {
    return letter.toLowerCase()
  } else if (letter.match(/[a-z]/)) {
    return letter.toUpperCase()
  }
}

let newStr = munstersDescription.replace(/\w/g, changeCases)
console.log(newStr)