const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}
if (!raining) {
  console.log("Leave your umbrella at home!");
}
if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
    console.log("Short sleeves are fine.");
}

/*const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}*/

console.log("Now you're ready to go outside!");
/* Citizenship*/
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
// Temp example 2
const temperature =-10;
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}