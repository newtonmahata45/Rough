

let a = 54
{
    let a = 5
    console.log("Inside",a)
}


console.log("Outside value:",a)


// var is a global variable

{   
    { 
        var ab = 45      
    }

console.log("Outside",ab)
}  
console.log("Anywhere:",ab)
// lexical scope global scope 
let aa= "Krishna"  //Global
function x(){
    const a = "Newton"  //OuterMost
    function y(){
        const b = "Rama"  // Inner
        function z(){
            const c = "Parsurama"  // Inner Most
            console.log(c)
            console.log(a)
        }
        console.log(z())
        console.log(aa)
    }
    y()
}
x()
