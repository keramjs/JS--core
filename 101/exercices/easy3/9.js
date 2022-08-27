function cleanUp(txt) {
  return txt.replace(/\W/g, " ").replace(/\s+/g, " ");
}

console.log(cleanUp("---what's my +*& line?"));  