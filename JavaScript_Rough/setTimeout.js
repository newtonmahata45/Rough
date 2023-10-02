console.log("I'm very the 1st String")

async function ro() {
    setTimeout(() => {
        console.log("I'm the Second String but I arrived later")

    }, 1000)
}
ro()
console.log("I'm the 3rd String")

// function sleep(x) {
//     setTimeout(() => {
//         console.log("Set Time Out")
//     }, x);
// }

// (async () => {
//     console.log("asfdsfad")
//     await sleep(3000)
//     console.log("64654654")
// })()

// const delay = (miliseconds) => new Promise(resolve => setTimeout(resolve, miliseconds))


// const Ro = async () => {
//     console.log('Newton')

//     await delay(10000)
    
//     console.log("Mahata")
// }

// Ro()


