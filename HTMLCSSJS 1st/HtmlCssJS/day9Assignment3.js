const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
// 3.
// take out last three element from the morePlaces Array and take out first three elements from the places array 
// and print the combined array
//result = ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]

const [c, ...d] = morePlaces
const [e,f,g] = places
const newArr =[e,f,g]


console.log(...d,...newArr)