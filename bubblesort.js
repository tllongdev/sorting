function bubbleSort(array) {
  let swap,
    len = array.length - 1,
    cloneArr = array,
    temp;

  // do {
  //   swap = false;
  //   for (let i = 0; i < len; i++) {
  //     if (cloneArr[i] > cloneArr[i + 1]) {
  //       temp = cloneArr[i];
  //       cloneArr[i] = cloneArr[i + 1];
  //       cloneArr[i + 1] = temp;
  //       swap = true;
  //     }
  //   }
  //   len--;
  // } while (swap);
  // return cloneArr;

  do {
    swap = false;
    for (let i = 0; i < len; i++) {
      cloneArr[i] > cloneArr[i + 1] &&
        ((temp = cloneArr[i]),
        (cloneArr[i] = cloneArr[i + 1]),
        (cloneArr[i + 1] = temp),
        (swap = true));
    }
    len--;
  } while (swap);
  return cloneArr;
}
