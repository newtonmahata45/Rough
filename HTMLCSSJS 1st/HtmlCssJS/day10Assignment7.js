let a1 = 5
let b1 = 6
let c1 = 7
const s1= (a1 + b1 + c1) / 2


function area(a, b, c, s) {
    return (Math.sqrt(s * (s - a) * (s - b) * (s - c)));
}


console.log(area(a1, b1, c1, s1));
