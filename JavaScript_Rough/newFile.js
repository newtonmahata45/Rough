// Given an array of N integers, and an integer K, 
// find the number of pairs of elements in the array whose sum is equal to K.


// Example 1:

// Input:
// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2
// Explanation: 
// arr[0] + arr[1] = 1 + 5 = 6 
// and arr[1] + arr[3] = 5 + 1 = 6.



// function countPair(arr,k) {
//     arr.sort((x,y)=>x-y);
//     let i=0;
//     let j=arr.length-1;
//     let ans =0;
//     while(i<j){
//         if (arr[i]+arr[j]==k) {
//             ans++;``
//             i++
//         }
//         else if(arr[i]+arr[j]>k){ j--}
//         else if(arr[i]+arr[j]<k){ i++}
//     }

//     console.log(ans)
// }


// countPair([1, 1, 1, 1],2)
