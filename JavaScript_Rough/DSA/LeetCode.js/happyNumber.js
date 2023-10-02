// var isHappy = function(n) {
//     let map = new Map();
//     return reCheak(map,n)
// };

// function reCheak(map,num){
//     let x = 0;
//     num.toString().split("").map((e)=> x +=(+e)**2);
    
//     if(map.has(x))return false;

//     if(x == 1){ return true }
//     else{ 
//         map.set(x,1)
//         return reCheak(map,x)
//     }
// };

// console.log(isHappy(19))

let nums = [1,2,3,4,5,6,7]
nums.splice(1,1)
console.log(nums)