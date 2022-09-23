function pushZeroToTheEnd(nums) {
  const zeros = nums.filter((n) => n === 0);
  const nonZeros = nums.filter((n) => n !== 0);

  const result = [...nonZeros, ...zeros];

  return result;
}

const result1 = pushZeroToTheEnd([0, 1, 0, 3, 5]); // [1, 3, 5, 0, 0]
const result2 = pushZeroToTheEnd([0]); // [0]

console.log(result1);
console.log(result2);
