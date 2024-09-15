import generate_random_number_array from "./generate_random_number_array.js";
import average from "./average.js";

let array = generate_random_number_array(50, 1, 500);
console.log(array)
console.log(average(array));
