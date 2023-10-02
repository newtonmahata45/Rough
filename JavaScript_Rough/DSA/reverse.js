// let str = '';
// function solution(a) {
//   //Write your solution here
//     if(a.length == 0){ return str}
//     if(a.length == 1){ return str += a[0]}
//     let b = a[a.length-1]
//     a = a.slice(0,-1);
//     str += b;
//     solution(a);
//     return str
// }

// console.log(solution("newton"))



var reverseString = function(s) {
  let arr = [];
  return recursive(s,arr);
   
};

var recursive = function(s,arr){
  if(s.length == 0){ return arr}
  else{let b = s.pop();
  arr.push( b);

  return recursive(s,arr)}

}

console.log(reverseString(['N','e','w','t','o','n']))