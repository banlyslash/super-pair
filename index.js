function pushZeroToTheEnd(nums) {
  return nums.sort(function (a, b) {
    if (a === 0 && b !== 0) {
      return 1;
    } else if (b === 0 && a !== 0) {
      return -1;
    } else {
      return 0;
    }
  });
  //const zeros = nums.filter((n) => n === 0); //O(n)
  //const nonZeros = nums.filter((n) => n !== 0); //O(n)
  //const result = [...nonZeros, ...zeros];
  //return result;
}

const result1 = pushZeroToTheEnd([0, 1, 0, 3, 5]); // [1, 3, 5, 0, 0]
const result2 = pushZeroToTheEnd([0]); // [0]

console.log(result1);
console.log(result2);
