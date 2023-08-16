// Code By Abdul waris

// let num = prompt("How many seats are there?", "2")
// if (num === 2) {
//     document.write("you choosed 2")
// }
// else {
//     document.write(num + " students will sit in class")
// }

let day = [4,2,3,2];
let dayName;

switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    default:
        dayName = "Unknown";
}

console.log(`Today is ${dayName}.`);