const nums = [0, 7, 2, 6, 5, 3, 1, 9, 8, 4];

function insertionSort(array) {
   for (let i = 1; i < array.length; i++) {
      let currentElement = array[i]
      let j
      for (j = i - 1; j >= 0 && array[j] > currentElement; j--) {
         array[j + 1] = array[j]
      }
      array[j + 1] = currentElement
   }

   return array
}

console.log(insertionSort(nums))