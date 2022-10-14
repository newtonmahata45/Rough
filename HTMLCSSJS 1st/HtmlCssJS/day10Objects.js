// //Objects 
// Objects==> you can't  find key from value
// Array==> you can find index from value

// Objects==> no sequence/order
// Array==> maintains order

// Objects==> deletion and addition of keys is very fast
// Array==> it is slow, if we are not doing this operation at the all


// var car = {
//     brand: "RolesRoyels",
//     model: "A4",
//     color: "Blue"

// }
// console.log(car.model)
// console.log(car["brand"])

// console.log(car["model"] + car["color"])
// console.log(car.color, car.brand)

const person = {
    name: "Newton",
    surname: "Mahata",
    age: 23,
    hobby: ["cricket", "cycling", "swimming"],
    address: {
        vill: "Khariduara",
        ps: "Boro",
        dist: "Purulia"
    }
}

// console.log(person.surname)
// console.log(person.address.dist)
// person.name = "Dalton"     //Update any key
// console.log(person.name)
// person.hobby[1] = null     //Erase
// console.log(person)
// delete person.age         //Delete any key
// console.log(person)

// Object.freeze(person)
// person.name = "Hari Prasad"
// console.log(person)
// Object.keys(person).forEach((i)=>{
//     console.log(person[i]);
// })
console.log(Object.keys(person.address))