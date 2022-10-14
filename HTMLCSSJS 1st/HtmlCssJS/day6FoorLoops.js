// for (let i = 1; i < 12; i++) {
//     console.log(i)
// }

console.log("Break");
const testData = [4, 10, 5, 24, 12, 7];
for (let n = 0; n < 6; n++) {
    if (testData[n] === 24)
        break;
    console.log(n,testData[n]);

}
console.log("continue");           //Skip
const Arr = [4, 10, 51, 2, 24, 12, 7];
for (let k = 0; k < 6; k++) {
    if (k === 3)
        continue;
    console.log(Arr[k]);
}
