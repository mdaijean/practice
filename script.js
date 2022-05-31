document.write("JavaScript works!");
console.log("Hello console!");
console.warn("This is only a test!");

let myName = "My name is ";
myName += "Ameenah";
let workFromHome = true;
let side = 15;
let length = `The length of each side is ${side}`;
let radius = 10;
let circle = `The radius of the circle is ${radius}`;
let squareArea = side * side;
let squarePerimeter = 4 * side;
let circleArea = Math.PI * (radius * radius);
let circlePerimeter = Math.PI * radius * 2;

console.log(myName);
// this is my name! if you're viewing this code, it's nice to meet you!
console.log(`I work from home: ${workFromHome}`); // i do work from home!
console.log(length);
console.log(circle);
console.log(
  `The square area is ${squareArea} and the perimeter is ${squarePerimeter}`
); // this logs both the square area and the square perimeter!
console.log(
  `The circle area is ${circleArea} and the perimeter is ${circlePerimeter}`
); // this logs both the circle area and circle perimeter!

// this is  step 5!

let travelOptions = ["foot", "bike", "car", "airplane"];

console.log("The travel options are:");
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

// this is steps 6, 7, and 8!

let travelType = prompt("How would you like to travel?");

let distance = 100;
let time = 0;
let cost = 0;

if (travelType === "foot") {
  console.log("Walking is free! Speed is 3mph.");
  cost = 0;
  time = distance / 3;
} else if (travelType === "bike") {
  let rentBike = prompt("Do you need to rent the bike? (yes or no)");
  if (rentBike === "yes") {
    console.log("Bike rental is $45! Speed is 10mph.");
    cost = 45;
  } else {
    console.log("Biking is free! Speed is 10mph.");
    cost = 0;
  }
  time = distance / 10;
} else if (travelType === "car") {
  console.log("Driving is $0.25/mi. Speed is 60mph.");
  cost = 0.25 * distance;
  time = distance / 60;
} else if (travelType === "airplane") {
  console.log("Flying is $0.10/mi. Speed is 400mph.");
  let passengerCount = parseInt(prompt("How many passengers?"));
  cost = 0.1 * distance * passengerCount;
  time = distance / 400;
} else {
  console.log(`${travelType} is an invalid option.`);
}

console.log(
  `Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`
);

