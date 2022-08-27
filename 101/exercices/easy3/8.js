function getGrade(val1, val2, val3) {
  score = (val1 + val2 + val3) / 3;
  console.log(score);
  if (90 <= score && score < 100) { return "A" };
  if (80 <= score && score < 90) { return "B" };
  if (70 <= score && score < 80) { return "C" };
  if (60 <= score && score < 70) { return "D" };
  if (0 <= score && score < 60) { return "F" };
};

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

