const nums = [7, 2, 6, 5, 3, 1, 9, 8, 4];
const sortedNums = [];

while (nums.length > 0) {
    const {value, index} = findIndexOfMinInArray(nums)
    nums.splice(index, 1)
    sortedNums.push(value)

}

console.log(sortedNums)

function findIndexOfMinInArray(array) {
    if (array.length === 0) {
        return {
            value: null,
            index: null
        };
    }

    const result = {
        value: array[0],
        index: 0
    };

    for (let i = 0; i < array.length; i++) {
        if (array[i] < result.value) {
            result.value = array[i]
            result.index = i
        }
    }

    return result
}