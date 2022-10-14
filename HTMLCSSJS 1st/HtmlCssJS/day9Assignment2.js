const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
//2.
// insert that element at the start of the morePlaces array and print the new array
// result = ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

x =[places[0],...morePlaces]
console.log(x)