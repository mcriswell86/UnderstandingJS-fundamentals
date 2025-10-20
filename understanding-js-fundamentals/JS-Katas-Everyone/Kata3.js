// Kata 3: Multiplication table using nested loops
// ** OBJECTIVE** Comment out your code. To better understand nested loops**
// Commit 1: "scaffold nested loops"
// Commit 2: "added multiplication logic"
// Commit 3: "refactored for readability and spacing"

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j) + "\t";
  }
  console.log(row);
}

// Stretch Goal: Guard clause example
function printNumber(num) {
  if (num <= 0) return console.log("Please enter a positive number.");
  console.log("Number:", num);
}
