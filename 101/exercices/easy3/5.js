/* 
input = int
return undef
sice effect prints triangles that each side have int stars

last line = int
first line = int-1 spaces + * at the end
second = int-2 + **
number of rows = int
*/

function triangle(int) {
  for (i = 1; i <= int; i += 1) {
    console.log(`${' '.repeat(int - i)}${'*'.repeat(i)}`)
  }
}

triangle(4)
triangle(6)