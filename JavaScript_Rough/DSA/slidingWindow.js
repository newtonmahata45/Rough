//Length of Longest Sub-string without Reapting characters: 

var lengthOfLongestSubstring = function(s) {
    const map = {};
    let ans = 0
    let j = -1;
    for(let i=0;i<s.length;i++){
        if(map[s[i]]>= 0 && j < map[s[i]]){
            j = map[s[i]]
        }
        map[s[i]] = i;
        ans = i-j>ans ? i-j : ans
    }

    return ans

};
console.log(lengthOfLongestSubstring('abbsd'));



// Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.

// function solution(arr) { 
//     //Write your solution here 
//     let i= 0; let j = 0; 
//     let ans = - Number.MAX_VALUE; 
//     let curSum = 0; 
//     while (j < arr.length){ 
//         if(i == arr.length){ 
//             j++; i = j 
//         } else{ curSum += arr[i] } 
//         if(i==j){ curSum = arr[i] } 
//         ans = curSum > ans ? curSum : ans 
//         console.log(curSum) 
//         i++ 
//     }
//     return ans 
// }
// let arr = [-20, -12, 42, -10, 25]
// let res = solution(arr)
// console.log(res);



//Leet Code qusetion ::219
var containsNearbyDuplicate = function(nums, k) {
    
    let j = 0;
    let i = 1;
    while(j<nums.length-1){
        if(i-j > k) {
            j++; 
            i = j
        }
        else if(nums[j] == nums[i]){ return true }
        i++;
    }
    return false
};
let nums = [5,7,8,8,0]
console.log(containsNearbyDuplicate(nums,1))