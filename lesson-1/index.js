// for

const arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    console.log(el)
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}

for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    if (i === arr.length - 1) {
        console.log(el, 'no next element')
    } else {
        const nextEl = arr[i + 1]
        console.log(el, nextEl)
    }
}

// while

let index;
while (index < arr.length) {
    const el = arr[index]
    console.log(el)
    index++
}

// Find min and max
const numbers = [1, 4, 9, 16, -1, 25]

let min = numbers[0]
let max = numbers[0]

for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i]
    if (number < min) {
        min = number
    } else if (number > max) {
        max = number
    }
}