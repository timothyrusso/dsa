/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  nums.sort((a, b) => a - b);

  // Assegna ad ogni indice il rispettivo valore, come intero negativo
  for (let i = 0; i < nums.length; i++) {
    nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1]);
  }

  // I valori negativi vengono rimossi
  for (let j = 0, k = 0; j < nums.length; j++) {
    if (nums[j] < 0) {
      nums.splice(j, 1);
      j--;
    } else {
      nums[j] = k + 1;
    }
    k++;
  }

  return nums;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

// nums.length e' il numero totale di elementi
// no extra space
// O(n) e' il limite di complessita'
// Since the elements are in range [1, n] try working on indexes
// the idea is to have the numbers match their index, so index 2 for example should contain 2. these numbers then after check for the numbers that dont match their index and add that to the arraylist.
