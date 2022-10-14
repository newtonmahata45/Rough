// problem 5
// Find sum and multiplication of all natural numbers from 10 to 20

multi = 1
sum = 0
for (let i = 10; i < 21; i++) {

    multi = multi * i
    sum = sum + i

}
console.log("Multiplication: ", multi)
console.log("Sum: ", sum)