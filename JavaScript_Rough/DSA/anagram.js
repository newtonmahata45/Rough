function isAnagram(a, b){
        // code here
        let map = new Map();
        let map2 = new Map();
        if(a.length !=b.length){return "NO"}
        for(let i=0;i<a.length;i++){
            map.set(a[i], map.get(a[i])+1||1) 
            map2.set(b[i], map2.get(b[i])+1||1) 
        }
        for(let j=0;j<a.length;j++ ){

            if(map.get(a[j]) != map2.get(a[j])){
                
                return "NO"
            }
        }
        return 'YES'
    }
console.log(isAnagram('b4b', 'b3b'));

