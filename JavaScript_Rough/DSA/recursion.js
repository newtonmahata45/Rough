
/**  RECURSION:
 *          Recursion is a process in which the function calls itself indirectly or directly
 *          in order to solve the problem
 *    
 * :: Function calls itself from inside ::
 *  1. Base Case (return)
 *  2. Call function
 * 
 */

// //Given an integer N, calculate the sum of 1 to N integers using recursion.

// function solution(a) {
//     if (a==1) {
//         return 1
//     }

//     return a + solution(a-1)
// }

// let res = solution(5)
// console.log(res);

// function fibo(n) {
//     if(n==1||n==2) return 1

//     return fibo(n-1) + fibo(n-2)
// }
// console.log( fibo(11) );

// function power(a, b) {
//     if (b == 1) return a;
//     return a * power(a, b - 1)
// }
// console.log(power(2, 6));


// let num = 45.23
// console.log(+(`${num}`.split('.')[0]));
/*;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 ***************;;;;;;;;;  Leet Code question 390  ;;;;;;;;;*************
 * ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 */


// var recursive = function(arr,isReverse,x){

//   if(arr.length <= 1){ return arr[0] }

//   if(x < 0){ isReverse = false ;
//          x=0 }
//   else if(x >= arr.length){isReverse = true;
//     x = arr.length-1 }
//     if(!isReverse){ 
//       arr.splice(x,1);
//        x += 1
//     }
//     else if(isReverse){ 
//         arr.splice(x,1);
//         x -= 2
//     }
//   return recursive(arr,isReverse,x)
// }

// var lastRemaining = function (n) {
//     let x = 0;
//     let isReverse = false;
//     let Arr = [];
//     for (let i = 1; i <= n; i++) {
//         Arr.push(i)
//     }
//     return recursive(Arr, isReverse, x)
// }

// console.log(lastRemaining(200000));//

// function recursive(arr, isReverse, x) {
//     while (true) {
//         if (arr.length <= 1) { break;  }

//         if (x < 0) {
//             isReverse = false;
//             x = 0;
//             b = x;
//         }
//         else if (x >= arr.length) {
//             isReverse = true;
//             x = arr.length - 1
//         }
//         if (!isReverse) {
//             // while (x < arr.length) {
//                 arr.splice(x, 1);
//                 x += 1
//             // }
//         }
//         else if (isReverse) {
//             // while (x >= 0) {
//                 arr.splice(x, 1);
//                 x -= 2
//                 // }
//             }
//         }
//         return arr[0]
//     }

// var lastRemaining = function (n) {
//     let length = n;
//     let diff = 1;
//     let start = 1;
//     let dir = 0;

//     while (length > 1) {
//         if (dir == 1) {
//             if (length % 2 == 0) {
//                 start = start;
//             } else start = start + diff;
//         } else {
//             start = start + diff;                       // 1, 2, 3, 4, 5, 6, 7, 8, 9 
//         }
//         diff *= 2;
        
//         dir ^= 1;
//         length = Math.floor(length / 2);
//     }
//     return start;
// };

// console.log(lastRemaining(9));

function newt(i,j,x){
    let mid = Math.floor((j+i)/2);

    if( (mid * mid) <= x && ((mid+1) * (mid+1)) > x ) return mid;
    else if((mid * mid) > x){
       return newt(i,mid,x)
    }
    else if((mid * mid) < x){
       return newt(mid,j,x);
    }
    
}
console.log(newt(0,8,8))