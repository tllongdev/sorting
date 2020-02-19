describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles a single item', function() {
    expect(bubbleSort([6])).toEqual([6]);
  });

  it('handles multiple items', function() {
    expect(bubbleSort([9, 6, 22, 666, 555, 99, 3])).toEqual([3, 6, 9, 22, 99, 555, 666]);
  });
});
