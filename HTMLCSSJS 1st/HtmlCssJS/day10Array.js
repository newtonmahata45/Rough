//ARRAYS
var d= [ 2, 4, 6, 8, 10, 12 , 14, 16, 18 ]

var e= [ "Dharma", "Artha", "Kama","Mokhsha"]

var f= [ 23, "Parsurama", "Rama", 23, 5346 , 45]

var g= [ 23, "Krishna", "Balaram", { a: 12 , b: 5}, 5346 , 45]  //ARRAYS
console.log(g[3].a)




// ARRAYS
var arr= [ 2, 4 ,6 ,8 , 10  ]

console.log( arr.length)
console.log( arr[0] ) //index or position starts from 0 

 // COUNT starts from 1 : for length
//index or position starts from 0 

// console.log( arr[3]) // 8

// the last index of array is (length - 1)
let l= arr.length
console.log( arr[l-1] )



// join pop push shift unshift splice sort

var arr= [ 2, 4 ,6 ,8 , 10  ]
// var xyz= arr.join()  // by default it fuses together all the elements separated by a comma
// console.log(  xyz )

// var xyz= arr.join(" ") // fused - seperated by space
// console.log(  xyz )

// var xyz= arr.join("-") // fused - seperated by -
// console.log(  xyz )

var xyz= arr.join("") // fused - seperated by nothing
console.log(  xyz )


// HOW TO ADD & REMOVE elements form an array
var cars= [ "BWM", "Maruti", "Merc", "TATA", "Jaguar"]

var abc= cars.pop()               // pop does two things:
console.log( cars)                // - it removes the last element of an array
console.log( "abc is:" , abc )    // - it gives back the removed element




var food= ["pizza", "mango", "apple" , "samosa"]

var xyz= food.push( "jamun" )      //Push does two things:
console.log( food )                // - it add an element to the end an array
console.log( xyz)                  // - it gives back the new length of the array




//  ADDING/REMOVING ELEMENTS at beginning of an array
var cars= [ "BWM", "Maruti", "Merc", "TATA", "Jaguar"]

var abcd= cars.shift()                       //shift does two things:
console.log( cars)                           // - it removes the first element of an array
console.log( "abcd is:" , abcd )             // - it gives back the removed element



var vegs= ["aaloo", "tomato", "karela"]                      
var pqrs= vegs.unshift("garli")                   //Unshift does two things:
console.log( vegs)                               // - it add an element to the STARTING an array
console.log( pqrs)                               // - it gives back the new length of the array               



var brands= [ "BMW", "Merc", "Audi", "Porsche"]
brands.splice( 1 , 0 , "jaguar", "ford", "maruti", "kia", "mg")
console.log( brands)
// splice( index from whcih you want to add elemetns, the number of elements to delete, the elements to add)

var brands= [ "BMW", "Merc", "Audi", "Porsche"]
brands.sort()
console.log( brands)

var nos= [12, 45, 123, 8 , 65]
nos.sort()
console.log(nos)

// lexicographic sorting