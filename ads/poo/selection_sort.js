function selection_sort(array) {
  for (i = 0; i < array.length; i++) {
    let lowest = array[i];
    let lowest_pos = i;
    for (k = i + 1; k < array.length; k++) {
      if (array[k] < lowest) {
        lowest = array[k];
        lowest_pos = k;
      }
      [array[i], array[lowest_pos]] = [array[lowest_pos], array[i]];
    }
  }
  return array;
}
