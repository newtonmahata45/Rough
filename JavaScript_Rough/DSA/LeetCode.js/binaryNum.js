var addBinary = function(a, b) {
    
    let f = 0;
    let s = 0;
    let i=0;
    
    while(i<a.length || i<b.length){
        if(i<a.length)
            f += a[i]* 2**(a.length-i-1);
        if(i<b.length)
            s += b[i]* 2**(b.length-i-1);
        
        i++
    }
    console.log(f)
    let num = f+s;
    function binary(n){
        if(n==1) return "1";
        else if(n==0) return "0";
        if(n%2){
            return binary((n-1)/2) + "1"
        }
        else { 
            return binary(n/2) + "0" 
            
        }

    }
    return binary(num)
};

console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101","11"))