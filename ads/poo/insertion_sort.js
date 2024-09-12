function insertion_sort(array) {
  for (i = 0; i < array.length; i++) {
    for (k = i + 1; k < array.length; k++) {
      if (array[k] < array[i]) {
        [array[i], array[k]] = [array[k], array[i]];
      }
    }
  }
  return array;
}
