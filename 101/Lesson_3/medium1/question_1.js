let str = "The Flinstones Rock"
let spaces = ''
for (i = 0; i < 10; i++) {
  console.log(spaces + str);
  //spaces = (' '.repeat(i)+str)
  spaces = spaces + ' '
}
