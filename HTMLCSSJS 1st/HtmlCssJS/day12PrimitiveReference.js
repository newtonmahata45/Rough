//Primitive                                     
let num1 = 6;
let num2 = num1;
num1++;
console.log(num1);              // Only num1 will change, after incriment
console.log(num2);              

//Referance type
//Array, Objects

let arr1 = ["October","November","December"]
let arr2 =arr1
arr1.unshift("September")
console.log(arr1)
console.log(arr2)

let obj1 = {
    position1:"solid",
    position2:"liquide"
}
let obj2 = obj1;

obj1.position3 = "gas"

console.log(obj1)
console.log(obj2)
