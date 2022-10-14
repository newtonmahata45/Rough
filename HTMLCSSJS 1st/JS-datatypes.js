// // // // DATA  TYPES  IN  JS

// // // // Number  |  String  |  Objects  |  Arrays


// // // var a = 12

// // // var b = "text"

// // // var c = {

// // //     name: "John",
// // //     surname: "Wick",
// // //     age: 40,
// // //     weight:"72kg"
    
// // // }


// // // var d= [ 2, 4, 6, 8, 10, 12 , 14, 16, 18 ]

// // // var e= [ "SRK", "Akshay", "Tiger"]

// // // var f= [ 23, "audi", "jaguar", 23, 5346 , 45]

// // // var f= [ 23, "audi", "jaguar", { a: 12 , b: 5}, 5346 , 45]



// // // // Objects
// // // var car= {
// // //     brand: "Audi",
// // //     model: "Q7",
// // //     color: "White"
// // // }

// // // //object is a collection of KEYS (variables) and theiur VALUES
// // // //  object is a collection of KEY-VALUE PAIRS

// // // // console.log( car.brand )

// // // // console.log( car.model )
// // // // console.log( car["model"] )

// // // // console.log( car["brand"])

// // // console.log( car["brand"] + car["model"])
// // // console.log( car.brand + car.model)


// // // STRINGS
// // var str= "I should be in session on time"
// // console.log(str)
// // console.log( str.length ) // we can get the number of characters in a string using a property called "length"

// // // backslash escape character
// // var str2= " Ram said: \"Laxman bro, come here\" "
// // console.log( str2)

// // //  NUMBERS
// // var n= 345
// // n++
// // console.log( n++)

// // // MATH FUNCTIONS - Math.random Math.ceil Math.floor Math.round
// // var no1= Math.round( 12.2 )
// // // console.log ( no1 )

// // var no2= Math.round( 12.5 )
// // console.log ( no2 )


// // MATH.FLOOR ROUNDS DOWN TO THE LOWER SIDE INTEGER
// // var no3= Math.floor( 12.9999999999 )
// // console.log ( no3 )

// // var no3= Math.floor( 12 )
// // console.log ( no3 )

// // MATH.CEIL ROUNDS UP TO THE UPPER SIDE INTEGER
// // var no3= Math.ceil( 12.00001)
// // console.log ( no3 )

// // var no3= Math.ceil( 12 )
// // console.log ( no3 )

// // Math.random GIVES A RANDOM NUMBER FROM 0 to 1 ( 0 included and 1 excluded) : [0,1)

// // var no4= Math.random() 
// // console.log( no4)



// // var no4= Math.random() * 100 // [0 ,1) * 100 = [0, 100)
// // console.log( no4)
// // Q: get a random number between 1 to 101 [1,101)
// var no4= (Math.random() * 100) + 1// ([0 ,1) * 100 = [0, 100)  ) + 1 = [1 ,101)
// // console.log( no4)

// // Q: get a random number between 101 to 200 [101,200)
// // INCORRECT: (Math.random()) *100) +101 //([0 ,1) * 100 = 0 to 100 )+101 == 101 to 201
// // var no5=(Math.random()*101)+99 // 99 to 200

// var no6= (Math.random()*99)+101 // (0 to 99 )+ 101= 101 to 200  
// // console.log( no6)


// var no7= (Math.random()*99)+101 // (0 to 99 )+ 101= 101 to 200  
// // console.log(  Math.round(no7) )

// // try generating a random integere from 1 to 6


// // ARRAYS
// var arr= [ 2, 4 ,6 ,8 , 10  ]

// // console.log( arr.length)
// //  str.length

// // console.log( arr[0] ) //index or position starts from 0 


//  // COUNT starts from 1 : for length
// //index or position starts from 0 

// // console.log( arr[3]) // 8

// // the last index of array is (length - 1)
// let l= arr.length
// console.log( arr[l-1] )

// join pop push shift unshift splice sort


// var arr= [ 2, 4 ,6 ,8 , 10  ]
// // var xyz= arr.join()  // by default it fuses together all the elements separated by a comma
// // console.log(  xyz )

// // var xyz= arr.join(" ") // fused - seperated by space
// // console.log(  xyz )

// // var xyz= arr.join("-") // fused - seperated by -
// // console.log(  xyz )

// var xyz= arr.join("") // fused - seperated by nothing
// console.log(  xyz )


// // HOW TO ADD & REMOVE elements form an array
// var cars= [ "BWM", "Maruti", "Merc", "TATA", "Jaguar"]

// var abc= cars.pop()
// console.log( cars)
// console.log( "abc is:" , abc )


//pop does two things:
// - it removes the last element of an array
// - it gives back the removed element

// var fruits= ["pizza", "mango", "apple" , "samosa"]

// var xyz= fruits.push( "jamun" )
// console.log( fruits )
// console.log( xyz)


//Push does two things:
// - it add an element to the end an array
// - it gives back the new length of the array


// //  ADDING/REMOVING ELEMENTS at beginning of an array
// var cars= [ "BWM", "Maruti", "Merc", "TATA", "Jaguar"]

// var abcd= cars.shift()
// console.log( cars)
// console.log( "abcd is:" , abcd )

//shift does two things:
// - it removes the first element of an array
// - it gives back the removed element


// var vegs= ["aaloo", "tomato", "karela"]
// var pqrs= vegs.unshift("garlic")
// console.log( vegs)
// console.log( pqrs)


//Unshift does two things:
// - it add an element to the STARTING an array
// - it gives back the new length of the array



// var brands= [ "BMW", "Merc", "Audi", "Porsche"]
// brands.splice( 1 , 0 , "jaguar", "ford", "maruti", "kia", "mg")
// console.log( brands)
// splice( index from whcih you want to add elemetns, the number of elements to delete, the elements to add)

// var brands= [ "BMW", "Merc", "Audi", "Porsche"]
// brands.sort()
// console.log( brands)

var nos= [12, 45, 123, 8 , 65]
nos.sort()
console.log( nos)

// lexicographic sorting

//  how to sort an array in numeric fashiion