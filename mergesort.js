function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(left, right) {
  let leftIndex = 0,
    rightIndex = 0,
    sortedArray = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    left[leftIndex] < right[rightIndex]
      ? (sortedArray.push(left[leftIndex]), leftIndex++)
      : (sortedArray.push(right[rightIndex]), rightIndex++);
  }
  return sortedArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
