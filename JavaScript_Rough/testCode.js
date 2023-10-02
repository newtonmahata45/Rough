// console.log("I'm very the 1st String")

// // console.log("I'm the 2nd String")
// async function ro(){  setTimeout(  () => { console.log("I'm the Second String but I arrived leater")},1000)
// }
// ro()
// console.log("I'm the 3rd String")

// let arr1 = [1,2]
// let arr2 = [1,2]
// console.log(arr1 == arr2)
// console.log(arr1[2] === arr2[-1])

// const iat = Date.now()
// const exp = iat.toString().slice(0, -3)
// console.log(iat)
// console.log(exp)
// console.log(exp+10)


// console.log(+"6"+2+25) 
// console.log("6"+2+25) 
// console.log(20+"6"+2+25) 
// console.log(20+ +"6"+2+25) 


// var x = 23;
// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]); 

// function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),0);
//   }
//   }
//   func2();


// console.log([1,2,3] === [1,2,3])
// console.log("" == false)


// let b = null;
// let a = b ||45
// console.log(a)

// if((2 + null || 5 ) < 10){
//   console.log("ro")
// }

function dateIsValid(dateStr) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  const date = new Date(dateStr);

  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(dateStr);
}

// console.log(dateIsValid('2022-01-24')); // 👉️ true
// console.log(dateIsValid('07-09-1999')); // 👉️ false
// console.log(dateIsValid('30-02-2022')); // 👉️ false
// console.log(dateIsValid('hello')); // 👉️ false


let arr = [1, 0, 1, 1, 0, 1]
arr.forEach((item, index) => { if (arr[index] == 0) { arr[index] = 1 } else { arr[index] = 0 } })

// function myFunction(item, index, arr) {
//     if(arr[index]==0){
//       arr[index] = 1;
//       }else{arr[index]=0}
//     }

// console.log(arr)
// let obj = {b:{c:5}}
// console.log(obj.b)

// let x = -1.5654964;
// console.log(typeof x)
// console.log( Math.trunc(x)) // Cuts decimal
// console.log( Math.floor(x)) // Closet lower integer 
// console.log( x.toFixed())   //Round of 



// if(x>1){var y = 10}
// else {var y=12}
// console.log(y)

// let numb =[12,13,19,25]
// for (var i =0;i<numb.length;i++){
//   if(numb[i]== 27){
//     console.log(i);
//   break;
//  }
// }
// if(numb.length == (i || 0)){
//   numb.push(100)
//   console.log("Ro",i,numb)}

// var bo = "57"
// let n = Number(bo)
// // parseInt(bo)
// console.log( n + 1, bo)


// foo();
// var foo = 3;
// function foo(){
// console.log('1');
// }
// function foo(){
// console.log('2');
// }

let Object1 = {
  name: "Krishna",
  age: 25,
  isGod: true,
  interest: ["Faith", "truth", 9, { Loved: "Radha", wife: "Rukmni" }, 45],
  address: {
    city: "Dwarka",
    Pin: 361335,
    country: "India"
  }

}
let Object2 = {
  name: "Newton",
  age: null,
  isGod: false,
  interest: ["Faith", "truth", 9, { Loved: "Radha", wife: "Rukmni" }, 45],
  address: {
    city: "Dwarka",
    Pin: 361335,
    country: "India"
  }

}
let array = [Object1, Object2]
let theTime = "12:45"
Object2[theTime] = "Yes"
let route = array.filter((i) => { return !i.age })
console.log(route)

// alert("Newton")


let slotTime = `${2022}-${2}-${25} ${23}:${0}`;
let slotTime1 = `${2022}-${4}-${31} ${23}:${0}`;
const theDate = new Date(slotTime);
const theDate1 = new Date(slotTime1);
console.log(theDate.getTime() + ((14 * 60) + 59) * 1000)
// console.log(new Date())
// if(theDate > theDate1){console.log("Worng")}
// if(theDate < theDate1){console.log("Right")}
let timeSum = theDate//.getTime() //+((14 * 60) + 59) * 1000
let timeSum2 = theDate1//.getTime()

console.log(timeSum2)
time = "1214:"
vd = null
// console.log(vd)
xd = time.split(":")
console.log(vd<5)
// console.log(+xd[1])
// if(xd[1]){console.log("console.error();")}
if( vd < 5 ){ console.log("NewROOO")}

console.log(Date.now());
console.log((new Date()).getTime() == Date.now());
console.log(vd - 1)
console.log(new Date(Date.now()));



const objOfSlots ={}

for (let i = 0; i < 14; i++) {
    // let  theSlot = `slot${i+1}`
    objOfSlots[`slot${i+1}`] = "booom" + i
}
// console.log(objOfSlots);
console.log(2%2);
let hour = 10;
let minute = "00";
let timeFormat = `${hour}:${minute}`
console.log(timeFormat)

let all = function(){
    
  return  [15,45]
}
let df = all()
console.log(df)

// let x = new Date(`${2023}-${01}-${4} ${00}:${00}`)
// let j = new Date(`${2023}-${01}-${4}`)
// if(x =="Invalid Date"||!(12<x<18)){console.log("Wong");}
// console.log(x);
// console.log(j);

let x = 5;
if(x == ( 1 && 5)){ console.log("rok"); }
if(x == ( 1 || 5)){ console.log("rok222"); }
if(x !==  1 || x  !== 5){ console.log("bla bla"); }

function ro(){
  return (x ==  1 || x  == 5)
}
console.log(ro()) ;



//::::::::::::  PATTERN DRAWING  ::::::::::

// let rows = 6;
// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = rows; n >= 1; n--) {
//    for (let num = n; num >= 1; num--) {
//       // Print only boundary stars
//       if (num === 1 || num === n || n === rows) pattern += "*";
//       else {
//          pattern += " ";
//       }
//    }
//    pattern += "\n";
// }
// console.log(pattern);



console.log("Count Good Numbers")

var countGoodNumbers = function(n) {
  if(n==1){ return 5}
  let ans = 0;
  for(let i = 10**(n-1); i < 10**n;i++){
    let str = i+''
      for(let j= 0; j<n;j += 2){
          if(str[j] !=2 && str[j] !=3 && str[j] != 5 && str[j] !=7 ){
              ans--;
              break;
          }
          if(j < n-1 && str[j+1] % 2 == 1){
              ans--;
              break;
          }
      }
      ans++
  }
  return ans
};


console.log(countGoodNumbers(6))