function logInBox(txt) {
  console.log(`+-${'-'.repeat(txt.length)}-+`);
  console.log(`| ${' '.repeat(txt.length)} |`);
  console.log(`| ${txt} |`);
  console.log(`| ${' '.repeat(txt.length)} |`);
  console.log(`+-${'-'.repeat(txt.length)}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');