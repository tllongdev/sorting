describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with only 1 element', function() {
    expect(bubbleSort([6])).toEqual([6]);
  });

  it('handles an array with multiple elements', function() {
    expect(bubbleSort([9, 6, 22, 666, 555, 99, 3])).toEqual([3, 6, 9, 22, 99, 555, 666]);
  });
});
