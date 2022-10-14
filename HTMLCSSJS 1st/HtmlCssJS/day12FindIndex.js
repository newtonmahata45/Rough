array1=[12,4,3,17,9,45,78,35]
const found=array1.find(element=>element>30);
const found2=array1.find(element=>element>300);
const foundIndex=array1.findIndex(element=>element>50);
const foundIndex2=array1.findIndex(element=>element>300);

// console.log(found);
// console.log(found2);
// console.log(foundIndex);
// console.log(foundIndex2);


array2 = ["a",4,"b",8,"c",14,2,"d"]

const result1 = array2.map(x => x * 2).filter(x=> x%1===0)
console.log(result1)
resultNew = []
function foo(element){
    if (typeof element==="number"){
        resultNew.push(2*element)
    // } else {
        
    }console.log(resultNew)
}
foo(12)