describe('Merge Sort', function() {
  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });

  it('handles an array with only 1 element', function() {
    expect(mergeSort([6])).toEqual([6]);
  });

  it('handles an array with multiple elements', function() {
    expect(mergeSort([9, 6, 22, 666, 555, 99, 3])).toEqual([3, 6, 9, 22, 99, 555, 666]);
  });
});

// describe('Split Array function', function() {
//   it('is able to split an array into two halves', function() {
//     expect(Split([9, 6, 22, 666, 555, 99, 3])).toEqual([[3, 6, 9], [22, 99, 555, 666]]);

//   });
// });
