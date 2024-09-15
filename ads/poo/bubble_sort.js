function bubble_sort(array) {
  let changes;
  while (changes !== 0) {
    changes = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        changes++;
      }
    }
  }
  return array;
}

export default bubble_sort;
