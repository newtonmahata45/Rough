
/**
  Closure: A closure is the combination of a function bundled together (enclosed) with references to its 
    surrounding state (the lexical environment).
 */

function outer() {
    let a = 5
    function inner() {
        // let a = 12
      console.log("inner", a)
      return a
    }
    console.log("outer", a)
    return inner
}
let x =  outer()
let y = x()
console.log(y) 
//we are able to access the value of a even after outer() function closed; This is called clouser.

