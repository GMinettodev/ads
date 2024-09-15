function average(array) {
  if (!Array.isArray(array)) {
    throw Error("The function's param is not of the type Array.");
  }
  let length = array.length;
  let total = 0;

  for (let i = 0; i < length; i++) {
    total += array[i];
  }
  let average = total / length;
  return average.toFixed(2);
}

export default average;
