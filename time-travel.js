/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination); // Output: Ancient Egypt

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination); // Output: Medieval Europe

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";
// travelDate = "2024-06-01"; // Uncommenting this line will cause a TypeError
/*
 * Observations:
 * Attempting to change the value of a constant variable results in a TypeError because constants cannot be reassigned once defined.
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(timeMachineModel); // Output: undefined
var timeMachineModel = "T-800";
console.log(timeMachineModel); // Output: T-800
/*
 * Observations:
 * Due to variable hoisting, the declaration of `timeMachineModel` is hoisted to the top of its scope. Therefore, when it is logged before initialization, it returns `undefined` instead of throwing a ReferenceError.
 */
