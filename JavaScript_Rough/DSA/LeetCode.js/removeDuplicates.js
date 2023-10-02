// var removeDuplicates = function(nums) {
//     let x=1;
//     for(let i =0;i<nums.length;i++){
//         for(var j=0;j<x;j++){
//             if(nums[i]==nums[j])break;
//         }
//         if(j==x){nums[x]=nums[i];x++}
//     }
//     nums.splice(x)
//     // console.log(nums)
//     return nums
// };
// let arr = [0,0,1,1,1,2,2,3,3,4]
// console.log(removeDuplicates(arr))

cost = [1,100,1,1,1,100,1,1,100,1]
let n = cost.length;
let dp = new Array(n+1).fill(0)
// dp[n] = 0
function soln(cost,n){
    if(n < 0 )return 0;
    else if( n == 0 || n == 1) return cost[n];
    if( dp[n] !== 0 ){ return dp[n] }
    return dp[n]= cost[n] + Math.min(soln(cost,n-1),soln(cost,n-2))
}
console.log(soln(cost,n))
