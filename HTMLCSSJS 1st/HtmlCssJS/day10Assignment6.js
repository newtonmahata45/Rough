
let userInput = 201
let bb = false
if (userInput % 100 === 0) {
    if (userInput % 400 === 0) {
        bb = true;

    }
}
else if (userInput % 4 === 0) {
    bb = true;
}

if (bb == true) {
    console.log(userInput, " is a Leap Year")
} else {
    console.log(userInput, " is not a Leap Year")
}