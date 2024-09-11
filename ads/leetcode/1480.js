// Test case
let array = [1, 2, 3, 4, 5];

// Code

var runningSum = function (nums) {
  const res = new Array(nums.length);
  res[0] = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    res[i] = sum;
  }
  return res;
};
console.log(runningSum(array));

var runningSum = function (nums) {
  return nums.map((nums, i) => {
    return nums.slice(0, i + 1).reduce((acc, curr) => acc + curr, 0);
  });
};
