const nums = [0, 7, 2, 6, 5, 3, 1, 9, 8, 4];

// 1
// const sortedNums = [];

// while (nums.length > 0) {
//     const {value, index} = findIMinInArray(nums)
//     nums.splice(index, 1)
//     sortedNums.push(value)
//
// }

// console.log(sortedNums)

// 2
for (let i = 0; i < nums.length; i++) {
    const minElement = findIMinInArray(nums, i)
    const currentElement = nums[i]
    nums[i] = minElement.value
    nums[minElement.index] = currentElement
}

console.log(nums)

// utils
function findIMinInArray(array, startIndex = 0) {
    if (startIndex > array.length - 1) {
        throw new Error('Invalid start index')
    }

    if (array.length === 0) {
        return {
            value: null,
            index: null
        };
    }

    const result = {
        value: array[startIndex],
        index: startIndex
    };

    for (let i = startIndex + 1; i < array.length; i++) {
        if (array[i] < result.value) {
            result.value = array[i]
            result.index = i
        }
    }

    return result
}