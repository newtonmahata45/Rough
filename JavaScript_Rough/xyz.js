function higherOrder(fn) {
    fn();
  }

higherOrder(()=> console.log("Newton Mahata"));

let { max } = Math;

console.log( max(5,6,75,98,4) )
let nums = [4, 8, 1, -3, 2];
let v = nums.sort((a,b)=>a-b)
// let v = nums.splice(1, 3);
console.log(v,nums)

let names = [
  { name: "Newton Mahata", age: 24, gender: "Male" },
  { name: "Krishna", age: 25, gender: "Male" },
  { name: "Radha", age: 30, gender: "Female" },
  { name: "Arjuna", age: 25, gender: "Male" },
  { name: "Dropdi", age: 23, gender: "Female" },
  { name: "Subhadra", age: 22, gender: "Female" },
  { name: "Dalton Mahata", age: 22, gender: "Male" },
  { name: "Rohit Sharma", age: 36, gender: "Male" },
];

console.table(names);

