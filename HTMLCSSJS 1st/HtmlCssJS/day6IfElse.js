// document.write("Hi there . I am JS")
// window.alert("Message alart from JS")
// docoment.write(45 + 12)
// This is a comments in JS

// if else condition
let age = 18
if (age > 18) {
    console.log("You can Drive")

} else if (age < 18) {
    console.log("You cann't Drive")

} else {
    console.log("We will think about it")
}




let fruit = "apple"
if (fruit === "banana") {
    console.log("Price of banana is 10 rs")
}
else if (fruit === "apple") {
    console.log("Price of apple is 50 rs")
}
else if (fruit === "cherry") {
    console.log("price of cherry is 15 rs")
}
else {
    console.log("we don't have this Fruit ")
}


switch (fruit) {
    case "banana":
        console.log("Price of banana is 10 rs");
        break;
    case "apple":
        console.log("Price of apple is 50 rs");
        break;
    case "cherry":
        console.log("price of cherry is 15 rs")
    default:
        console.log("we don't have this Fruit ")

}

(fruit) ? "apple" : "we don't have this Fruit"

