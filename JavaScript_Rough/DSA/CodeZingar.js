
// //*****************************QUESTION NO 26.1****************************************

// function solution(str) {
//     // Write your solution here 
//     let obj = {
//         a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
//         n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
//     };
//     for (let i = 0; i < str.length; i++) {
//         obj[str[i]] += 1
//     }
//     let result = ''
//     let key = Object.keys(obj);
//     let value = Object.values(obj);
//     for (let j = 0; j < 26; j++) {
//         if (value[j] > 0) { result += `\n${key[j]} ${value[j]}` }
//     }
//     return result
// }
// console.log(solution('aaaaaaaaaaaaaaggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaa'))



// //*****************************QUESTION NO 27.1****************************************
// function solution(arr) {
//     //Write your solution here
//      let num = Number.MAX_VALUE;
//       arr.map((e) => { if(num > e){num = e}});
//       let point = - Number.MAX_VALUE;
//       let diff = Number.MAX_VALUE;
//       for(let i=0;i<arr.length;i++){
//           if(arr[i] == num){
//               if(diff > i-point){
//                   diff = i - point
//                 }
//                 // console.log(point,i);
//               point = i 
//           }
//       }
//       if(diff == Number.MAX_VALUE){return -1}
//       return diff
//   }

// var res = solution([5,2,7,4,2,9,5,45,2,11,45,2,45,74]);
// console.log(res);



// //*****************************QUESTION NO 27.2****************************************
// //Write your solution here
// function solution(arr) {
//       let max = - Number.MAX_VALUE;
//       let max2 = - Number.MAX_VALUE;
//       for(let i = 0; i < arr.length; i++){
//           if (arr[i] > max){
//               max2 = max
//               max = arr[i] 
//           }
//           else if(arr[i] > max2){ max2 = arr[i] }
//       }
//       return (max + ' ' +  max2)
//   }
// // var arr = [12,78,42,4,-12,7,65,32,21]
// var arr = [-77729, -268977, -28972 ,-28972, -29872, -2982789, -277892, -2897892, -29872, -878988, -7868776, -55676, -9765, -98, -43445]
// var res = solution(arr);
// console.log(res);

// //*****************************QUESTION NO 28.1****************************************
// // Given a string S of lowercase alphabets, count all possible substrings (not necessarily distinct)
// // that have exactly K distinct characters

// function solution(str,a) { 
//     // Write your solution here 
//     let obj = {} ; 
//     let ans = 0 ;
//     let i = 0 ; 
//     let j =0 ; 
//     while (j < str.length){
//          if(i == str.length){ 
//             j++; 
//             if(j==str.length){ break }
//             i = j; 
//             obj = {}; 
//             obj[str[i]] = 1; 
//         } 
//         else if(!obj[str[i]]){ 
//             obj[str[i]] = 1 
//         }else{ 
//             obj[str[i]] += 1 
//         } 
//         if(Object.keys(obj).length == a){ ans++} 
//         i++; 
//     } return ans 
// } 

// var str = "gghsasgohasgojj";
// var a = 3; 
// var res = solution(str,a); 
// console.log(res); 


// //*****************************QUESTION NO 28.2****************************************
// // Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.

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


// //*****************************QUESTION NO 28.3****************************************
//Given a string S and a number K, find the number of substrings of length K whose sum of ASCII
// value of characters is divisible by K.
// function solution(a,k) { 
//     //Write your solution here 
//     let count = 0; 
//     for(i =0;i<a.length;i++ ){ 
//         let sum = 0; 
//         for(j=0;j<k;j++){ 
//             sum += a.charCodeAt(i+j) 
//         } 
//         if(sum %k === 0){ count++ } 
//     } return count 
// }

// var a = ""; 
// var k = ; 
// var res = solution(a,k); 
// console.log(res); 


/** ********************************************************************************
***************************** QUESTION NO 32.2 ****************************************
**************************************************************************************
 Smallest window that contains all characters of string itself
 Given a string S, find the smallest window(substring) length with all distinct 
 characters of the given string.
*/


// function solution(s) {
//     let map = {};
//     for (let i = 0; i < s.length; i++) {
//         map[s[i]] = (map[s[i]] || 0) + 1;
//     }
//     let j = 0;
//     let k = s.length - 1;
//     let ans = s.length;
//     while (true) {
//         if (map[s[j]] > 1) {
//             map[s[j]] = map[s[j]] - 1;
//             j++;
//         }
//         if (map[s[k]] > 1) {
//             map[s[k]] = map[s[k]] - 1;
//             k--;
//         }
//         if (map[s[j]] == 1 && map[s[k]] == 1) {
//             ans = k - j + 1;
//             break;
//         }
//     } return ans
// }

// console.log(solution("cabaac"));


/** ********************************************************************************
***************************** QUESTION NO 33.1 ****************************************
**************************************************************************************
 Given an array of integers A, count the number of unique values in the array. 
 Do not use system function to find the unique number. 
*/

// function countUnique(arr) {

//     let map = new Map();
//     let ans = 0;
//     for (let i = 0; i < arr.length; i++) {

//         map.set(arr[i], map.get(arr[i]) + 1 || 1)

//         if (map.get(arr[i]) == 2) { ans -= 2 }
//         else if (map.get(arr[i]) > 2) { ans-- }
//         ans++

//     } return ans
// }

// let arr = [1, 2, 3, 1, 4, 2, 5, 6, 7, 8]

// console.log(countUnique(arr))

/** ********************************************************************************
***************************** QUESTION NO 33.2 ****************************************
************************************************************************************** 
 Find pair in an array with given sum::
 Given an array of integers A and an integer S, determines whether there exist
 two elements in the array whose sum is exactly equal to S or not. 

Display 1 a pair is found in an array with matching sum S else 0.
*/

// function findPair(sum, arr) {

//     arr.sort((x, y) => x - y);
//     let i = 0;
//     let j = arr.length - 1
//     while (i < j) {
//         if (arr[i] + arr[j] == sum) { return "Yes" }
//         else if (arr[i] + arr[j] > sum) {
//             j--
//         } else { i++ }
//     } return "No"
// }

// console.log(findPair(6, [1, -2, 3, 8, 7]))


/**********************************************************************************
***************************** QUESTION NO 34.2 ****************************************
************************************************************************************** 
 * Check if max occurring character of one string appears same number of times in other
 */

// function maxChar(str, str2) {
//     let char = null;
//     let num = 0;
//     let map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         map.set(str[i], (map.get(str[i]) + 1 || 1))
//         char = map.get(char) > map.get(str[i]) ? char : str[i];
//     }
//     for (let j = 0; j < str2.length; j++) {
//         if (str2[j] == char) { num++ }
//     }
//     if (map.get(char) == num) { return 'Yes' }
//     else { return 'No' }
// }
// var a = "hello world";
// var b = 'albcllsyaaaaaaaa';
// var res = maxChar(a, b);
// console.log( res );

/**********************************************************************************
***************************** QUESTION NO 35.2 ****************************************
************************************************************************************** 
 * Second most frequent character
 */

// function secondMostFreqChar(str) {
//     let map = new Map(); 
//     let max = null;
//     let ans = null;
//     for(let i=0;i<str.length;i++){
        
//         map.set(str[i],(map.get(str[i])+1)||1);
        
//         if(!map.get(max) || map.get(max) < map.get(str[i])){
//             ans = max;
//             max = str[i];            
//         }
//         else if(!map.get(ans) || map.get(ans) < map.get(str[i])){
//             ans = max != str[i] ? str[i]: ans
//         }
//     } return ans
// }

// var thestr = 'aaaaabbbbbbbzzzzzzzzzzzzzzzzzzzzzzzzzzzzxxxxxxxxxxxxx';
// // var thestr = 'Neeahata';
// var res = secondMostFreqChar(thestr);
// console.log('The Second Most Freq Char is:', res);



/**********************************************************************************
***************************** QUESTION NO 36.2 ****************************************
************************************************************************************** 
 * ------> Check if both halves of the string have same set of characters <----------
 * 
 * Given a string S, Check whether it is possible to split a string from the middle which will give 
 *  two halves having the same characters and same frequency of each character. 
 * If the length of the given string is ODD then ignore the middle element and check for the rest.
 */

// function bothHlf(str) {
//     let map1 = new Map();
//     let map2 = new Map();
//     let i=0;
//     let j = Math.ceil(str.length/2);
//     while(j<str.length){
//         map1.set(str[i], (map1.get(str[i])+1)||1);
//         map2.set(str[j], (map2.get(str[j])+1)||1);
//         i++;
//         j++;
//     }
//     let ans = 'Yes'
//     map1.forEach((v,k) => { if(map1.get(k) !== map2.get(k)) ans = 'No' })
//     return ans
// }

// // var str = 'abcdeabcd';
// var str = 'abcaabbc';
// var res = bothHlf(str);
// console.log(res);


// *****************************************************************************************
//************************************************************************************ */
// function solution(a,b,str) { 
//     let one =  a+b; 
//     // console.log(typeof one) 
//     let map1 = new Map(); 
//     let map2 = new Map(); 
//     for(let i = 0; i<one.length;i++){ 
//         map1.set(one[i],(map1.get(one[i])+1)||1); 
//     } 
//     for(let j =0; j<str.length; j++){ 
//         map2.set(str[j],(map2.get(str[j])+1)||1) 
//     } 
//     // console.log(map1,map2)
//     for(let k=0; k < one.length; k++){ 
//         // console.log(one,one[k],map1.get(one[k]),map2.get(one[k])) 
//         if(map1.get(one[k]) !== map2.get(one[k])) return "No"; 
//     }return "Yes" 
// } 
// var a = "AB"; 
// var b = "CD"; 
// var c = "ABCD"; 
// var res = solution(a,b,c); 
// console.log(res);



/**********************************************************************************
***************************** QUESTION NO 40.1 ****************************************
************************************************************************************** 
 * ------> Reverse a linked list <----------
*/
// class Node{
//     constructor(value,next){
//         this.value = value;
//         this.next = next== undefined ? null : next;
//     }
// }

// function solution(a,arr){
//     if(a==0) return "no element present";
//     if(a==1)return arr[0];
//     let head = convert(arr);
//     let i = head.next;
//     head.next = null;
//     while(i!=null){
//         let temp =i.next;   
//         i.next = head;
//         head = i;
//         i = temp;
//     }
//     let ans = [];
//     while(head!=null){
//         ans.push(head.value);
//         head = head.next;
//     }
//     return ans.join(" ")
// }

// function convert (arr){
//     let n = arr.length;
//     let i = 0;
//     let head = new Node(0)
//     let pointer = head;
//    while(i<n){
//        let newNode = new Node(arr[i]);
//        pointer.next = newNode;
//        i++;
//        pointer = pointer.next;
//     }
//     return head.next;
// }

// var arr = [10, 20, 30, 40, 50, 60 ];
// var a = arr.length;
// var res = solution(a,arr);
// console.log(res);


/**********************************************************************************
***************************** QUESTION NO 40.2 ****************************************
************************************************************************************** 
 * ------> Detect loop in a linked list <----------
// */
// class Node{
//     constructor(value,next){
//         this.value = value;
//         this.next = next== undefined ? null : next;
//     }
// }

// function solution(a,arr,index){
//     let i = 0;
//     let head = new Node(0)
//     let pointer = head;
//     let node = null;
//    while(i<a){
//        let newNode = new Node(arr[i]);
//        if(i==index){ node = newNode }
//        pointer.next = newNode;
//        i++;
//        pointer = pointer.next;
//     }
//     pointer.next = node;
//     return node ? 1 : 0
// }

// var arr = [10, 20, 30, 40, 50, 60 ];
// var a = arr.length;
// var index = 2;
// var res = solution(a,arr,index);
// console.log(res);


/**********************************************************************************
***************************** QUESTION NO 42.2 ****************************************
************************************************************************************** 
 * ------>  <----------
// */
// function solution(a) { 
//     let newArr =[]; 
//     for(let i=0;i<a.length;i++){ 
//         if(a[i]== "(" )newArr.push(")"); 
//         else if(a[i]=="{")newArr.push("}"); 
//         else if(a[i]=="[")newArr.push("]"); 
//         else{ 
//             if(newArr[newArr.length-1] !== a[i] )return 0; 
//             newArr.pop(); } 
//     } 
//     return newArr.length ? 0 : 1; 
// } 
// function main() { 
//     var a = readLine(); 
//     var res = solution(a); 
//     console.log(res); 
// }

// Using Stack 
// class Stack{ 
//     constructor(){ 
//         this.st = []; 
//     } 
//     add(value){ this.st.push(value)}; 
//     remove(){return this.st.pop()}; 
//     size(){ return this.st.length} 
// } 
// function solution(a) { 
//     let stack = new Stack; 
//     for(let i=0;i<a.length;i++){ 
//         if(a[i]== "(" )stack.add(")"); 
//         else if(a[i]=="{")stack.add("}"); 
//         else if(a[i]=="[")stack.add("]"); 
//         else{ 
//             let b = stack.remove();
//             if(b !== a[i] )return false; 
//         } 
//     } 
//     return stack.size() ? false : true
// } 
// var a = "({})[]"; 
// var res = solution(a); 
// console.log(res);

