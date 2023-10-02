/***
 * 1. what is node.js
 ==> node.js  is javascript runtime enviroment 
     which is builds on v8 chroms javascript engine

 ==> JavaScript and Node.js run on the V8 JavaScript runtime engine. 
    This engine takes your JavaScript code and converts it into a faster machine code.
    Machine code is low-level code 
    which the computer can run without needing to first interpret it

 * 2.why node.js?
    Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
    Node.js uses an event-driven, non-blocking I/O model that 
        makes it lightweight and efficient.
    Node.js’ package ecosystem, npm, is the largest ecosystem of 
        open source libraries in the world.

3 requires ?
    It loads modules that come bundled with Node.js 
        like file system and HTTP from the Node.js API .
    It loads third-party libraries like Express and Mongoose that you install from npm.
    It lets you require your own files and modularize the project
    
 */

//     let S1 = ("rohit").split('')
// let S2 = "roiit".split('');

// let newArr1 = [] ;
// let newArr2 = [] ;
// for(let i=0;i<S1.length;i++ )
//   {
//     if (S1[i] === ('a' || 'e' || 'i' || 'o' || 'u')) { newArr1.push('V') }
//     else { newArr1.push("C") }
//     if (S2[i] === ('a' || 'e' || 'i' || 'o' || 'u')) { newArr2.push('V') }
//     else { newArr2.push("C") }
//   }
//   console.log(newArr1);
//   console.log(newArr2);
// if (newArr1.join() !== newArr2.join()) { console.log( "No") }
// else { console.log( "Yes") }



// console.log(Number.MAX_VALUE-Number.MAX_VALUE);

// var maximumSum = function(nums) {
//     let ans = -1;
//     let i= 1;
//     let j = 0;
//     while(j < nums.length-1 ){
//         if(i == nums.length){
//             j++;
//             if(j == nums.length-1){ break }
//             i = j+1;
//         }
//         if(nums[i] + nums[j] > ans ){
//             let num = nums[i] + '';
//             let num2 = nums[j] + '';
//             console.log( num , typeof num);
//             console.log( num2 , typeof num2);
//             if((+num[0] + +num[1])== (+num2[0] + +num2[1])){ ans = nums[i] + nums[j] }
//         }
//         i++;

//     } return ans


// };
//  let arr = [4,6,10,6]
// let newt = maximumSum(arr)
// console.log(newt);
