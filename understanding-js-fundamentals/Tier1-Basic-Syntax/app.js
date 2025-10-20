
// TIER 1 — Basic JS Syntax & Conditionals

// Declare variables
let name = "Intern";
const day = "Friday";
let energy = 8;

// Conditional logic
if (energy > 7) {
  console.log(`Good job, ${name}! You're ready to code!`);
} else if (energy > 4) {
  console.log(`Almost there, ${name}. Grab some coffee.`);
} else {
  console.log(`Rest up, ${name}. Tomorrow’s another day.`);
}

// Switch example
let mood = "happy";
switch (mood) {
  case "happy":
    console.log("Keep coding with that energy!");
    break;
  case "tired":
    console.log("Take a quick break!");
    break;
  default:
    console.log("Stay positive!");
}
