// Kata 3: Multiplication table using nested loops
// ** OBJECTIVE** Comment out your code. To better understand nested loops**
// Commit 1: "scaffold nested loops"
// Commit 2: "added multiplication logic"
// Commit 3: "refactored for readability and spacing"

// Kata 3: Multiplication table using nested loops
// Commit 1: "scaffold nested loops"

// Kata 3: Multiplication table using nested loops
// Commit 3: "refactored for readability and spacing"

for (let rowNumber = 1; rowNumber <= 5; rowNumber++) {     
  let rowOutput = "";                                      
  for (let columnNumber = 1; columnNumber <= 5; columnNumber++) {  
    let product = rowNumber * columnNumber;                
    rowOutput += product + "\t";                           
  }
  console.log(rowOutput);                                  
}
