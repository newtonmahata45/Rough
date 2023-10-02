function getPairsCount(arr,n,k){
    //code here
    // let arr = arr2.sort((a,b)=> {return a-b})
    let ans = 0;
    let i = 1;
    let j = 0;
    while(j < arr.length -1){
        if(i == arr.length || arr[i] >= k){ 
            j++;
            if(arr[j] >= k || j == arr.length-1){break}
            i = j+1 }
        if(arr[i] + arr[j] == k ){ 
            ans++;

        }
        i++          
    } return ans
 }


// // {
//     let count = 0; // Initialize result
  
//     // Consider all possible pairs and check their sums
//     for (let i = 0; i < n; i++)
//         for (let j = i + 1; j < n; j++)
//             if (arr[i] + arr[j] == k)
//                 count++;
  
//     return count;
// }
// let arr2= [4,3,5]
let arr =[1, 5, 5, 5, 5, 7]
// let arr = arr2.sort((a,b) => {return a-b})
 let res = getPairsCount(arr, 6, 10)
 console.log(res);