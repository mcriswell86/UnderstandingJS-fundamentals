// Kata 2: FizzBuzz from 1 to 20
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold for loop"
// Commit 2: "added fizzbuzz logic"
// Commit 3: "refactored with clear variable and comments"

// Kata 2: FizzBuzz from 1 to 20
// Commit 2: "added fizzbuzz logic"

// Kata 2: FizzBuzz from 1 to 20
// Commit 3: "refactored with clear variable and comments"

for (let number = 1; number <= 20; number++) {
  // Check if number is divisible by both 3 and 5
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } 
  // Check if divisible by 3 only
  else if (number % 3 === 0) {
    console.log("Fizz");
  } 
  // Check if divisible by 5 only
  else if (number % 5 === 0) {
    console.log("Buzz");
  } 
  // Otherwise, just print the number
  else {
    console.log(number);
  }
}
