let Object1 = {
  name: "Krishna",
  age: 0,
  isGod: true,
  interest: ["Faith", "truth", 9, { Loved: "Radha", partner: "Rukmni" }, 18],
  address: {
    place: "Dwarka",
    Pin: 361335,
    country: "India",
  },
};
if (!Object1["age"]) console.log("Testing");

let Object2 = {
  name: "Newton",
  age: 23,
  isGod: false,
  interest: ["Faith", "truth", 9, { Loved: "God", partner: "Krinsha" }, 45],
  address: {
    place: "Khariduara",
    Pin: 723131,
    country: "India",
  },
};
//   let array = [Object1, Object2]
//   let theTime = "12:45"
//   Object2[theTime] = "Yes"
//   let route = array.filter((i) => { return !i.age })
//   console.log(route)
for (let i in Object1) {
  console.log(i);
}

// const objOfSlots ={}

// for (let i = 0; i < 14; i++) {
//     objOfSlots[`slot${i+1}`] = "booom" + i
//     }
// // let i = 0;
// // while ( i<14) {
// //         i++;
// // }
// console.log(objOfSlots);

// for (let i = 10; i >= 1; i = i/2) {
//   console.log("newton" ,i)

// }
// let l1 = [2,4,3]
// let l2 = [5,6,4]
// var addTwoNumbers = function(l1, l2) {
//   let first = [];
//   let second = [];
//   for(let i=l1.length-1;i>=0;i--){
//     first.push(l1[i])
//   }
//   for(let j=l2.length-1;j>=0;j--){
//     second.push(l2[j])
//   }
//   let res = `${+first.join('') + +second.join('')}`;
//   //   let ans = res.split('').reverse().map((e)=>+e);

//   return res//.split('').reverse()

// };
// console.log(addTwoNumbers(l1, l2));
// console.log([undefined,null][1]);

// let arr = [1,2,5,7]
// let x= -5
// arr.splice(arr.length-1)
// console.log(-x +'');

// var reverse = function(x) {
//   let str = x +'';
//   if(x < 0){
//       str = -x +''
//   }
//   let newStr = ''
//   let j = str.length-1
//   for( let i = 0; i < str.length; i++, j--){
//       newStr += str[j]
//   }
//   console.log( newStr )
//   newStr = x < 0 ? -newStr : newStr
//   return newStr
// };
// let a = 'asdfkjlfkj'
// console.log(reverse(a));

// let isPalindrom = function(str){
//   if(str.length <= 1) return true
//   if(str[0] == str.slice(-1) )
//     return isPalindrom(str.slice(1,-1));
//   else return false
// }

// console.log(isPalindrom("1234554321"))
// function capital(leter) {

// }
let array = ["newton", "krishna", "arjun"];
for (let i = 0; i < array.length; i++) {
  array[i][0] = array[i][0].toUpperCase();
  console.log(array[i]);
}
// console.log(array);
// console.log('46')

var containsNearbyDuplicate = function (nums, k) {
  let j = 0;
  let i = 1;
  while (j < nums.length - 1) {
    if (i - j > k) {
      j++;
      i = j;
    } else if (nums[j] == nums[i]) {
      return true;
    }
    i++;
  }
  return false;
};
