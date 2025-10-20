
// TIER 2 — Functions, Properties & Methods

// Function declaration
function greet(user) {
  return `Hello, ${user}!`;
}

// Function expression
const farewell = function(user) {
  return `Goodbye, ${user}!`;
};

// Arrow function
const addNumbers = (a, b) => a + b;

// Using string methods
let message = "JavaScript is fun!";
console.log(message.toUpperCase());

// Using array methods
let scores = [85, 92, 78, 90];
let highScores = scores.filter(score => score > 80);
console.log("High Scores:", highScores);

// Object with properties & methods
const intern = {
  name: "Alex",
  skills: ["HTML", "CSS"],
  addSkill(skill) {
    this.skills.push(skill);
  }
};
intern.addSkill("JavaScript");
console.log(intern);
