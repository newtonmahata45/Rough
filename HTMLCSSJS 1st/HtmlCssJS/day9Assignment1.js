const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']

const [a,...b] = places
console.log(b)

