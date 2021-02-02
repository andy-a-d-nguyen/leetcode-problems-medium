/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.



Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]


Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Input: an array of nums
// Output: an array of unique subsets
// Constraints: 1 <= nums.length <= 10
//              -10 <= nums[i] <= 10
//              All the numbers of nums are unique.
var subsets = function(nums) {
  // create a result array

  // helper function that takes in an array and an index
    // push array to result
    // iterate over input nums
      // recursively call helper function on array concatted with current num and index incremented by 1

  // call helper function with an empty array and 0 index

  // return result array
  let result = [];

  let recurse = (array, index) => { // dfs algorithm
    result.push(array);
    for (let i = index; i < nums.length; i++) {
      recurse(array.concat(nums[i]), i + 1);
    }
  }

  recurse([], 0);

  return result;
};
