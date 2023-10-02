
// Maps in JavaScript: We can use any type of key or value
const key1 = 'myStr', key2 = {}, key3 =  () => { 'Newton' }, key4 = true;
const myMap = new Map([['god', "krishna"]]);


// Setting map values
myMap.set( key1, 'This is a string');
myMap.set( key2, 'This is a blank obj');
myMap.set( key3, 'This is an Newton function');
myMap.set( key4, 'This is an Boolean');
myMap.set( 'key5', 0);
// myMap.set( key4, 'Jai Sree Krishna');

console.log(myMap);

// Getting the values from a Map 
let value1 = myMap.get(key3);
if ( ! myMap.get('key5')) {
    
    console.log(value1);
}

//  //Get the size of the map
// console.log('myMap is size:', myMap.size);

// // You can loop using for..of to get keys and values
// for (let [key, value] of myMap) {
//     console.log(key,":", value);
// }

// // Get only keys
// for (let key of myMap.keys()) {
//     console.log('key is ', key);
// }
// // Get only values
// for (let value of myMap.values()) {
//     console.log('value is ', value);
// }

// // You can loop through a map using for each loop
// myMap.forEach((value, key)=>{
//     console.log('Key is ', key);
//     console.log('Value is ', value);
// })

// // Converting map to an array
// let myArray = Array.from(myMap);
// console.log('Map to array is ', myArray);

// Converting map keys to an array
// let myKeysArray = Array.from(myMap.keys());
// console.log('Map to keys array is ', myKeysArray);

// // Converting map values to an array
// let myValuesArray = Array.from(myMap.values());
// console.log('Map to values array is ', myValuesArray);