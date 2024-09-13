function generate_random_number_array(size, min, max) {
  const randomArray = [];
  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

export default generate_random_number_array;
