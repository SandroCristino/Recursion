function mergeSort(array) {
    // Base case: if the array has length 1 or less, it is already sorted
    if (array.length <= 1) return array;
    
    // Split the array in half
    const leftHalf = array.slice(0, array.length / 2);
    const rightHalf = array.slice(array.length / 2);
  
    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted left and right halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(leftArray, rightArray) {
    const resultArray = [];

    // While both arrays are not empty
    while (leftArray.length && rightArray.length) {
      // Compare the first elements of the left and right arrays
      if (leftArray[0] <= rightArray[0]) {
        // If the first element of the left array is smaller or equal, add it to the result array
        resultArray.push(leftArray.shift());
      } else {
        // Otherwise, add the first element of the right array to the result array
        resultArray.push(rightArray.shift());
      }
    }

    // Concatenate any remaining elements from the left or right array
    return resultArray.concat(leftArray, rightArray);
  }

  console.log(mergeSort([1,23,4,313,2,123,123,12,3,12]))
  
