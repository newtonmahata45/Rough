// And => &&
// Or => ||
// Not=> !

const marks = 65
const branch = "mechanical"
const degree = "btech"

const isEligible = (marks >= 75) && (branch == "mechanical") && (degree == "btech")

if (isEligible) {
    console.log("You are Eligibile")

} else {
    console.log("You are not Eligibile")

}


const joinUp =  (marks >= 75) || (branch == "mechanical") || (degree == "btech")

if (isEligible) {
    console.log("You are Eligibile")

} else {
    console.log("You are not Eligibile")

}