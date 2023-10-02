function isPalindrome(S){
    //code here
    for(let i=0;i<S.length/2;i++){
        if(S[i]!=S[S.length-1-i]){
            return false
        }
    }return true
}


// Using Recursion
function isPalindrome(a) {
    console.log(a);
    if( a.length <= 1 ){ return true }
    else if( a[0] !== a[a.length-1] ){ return false}      //a[a.length-1]   a.slice(-1)
    return isPalindrome(a.slice(1,-1))
}


let str = 'newton';
let plr = isPalindrome(str)
console.log(plr);

  