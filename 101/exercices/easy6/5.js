function centerOf(txt) {
  return (txt.length % 2) ? txt[Math.floor(txt.length / 2)] : txt[Math.floor(txt.length / 2) - 1] + txt[Math.floor(txt.length / 2)];
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"