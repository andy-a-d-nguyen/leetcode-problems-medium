/*
There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).



Example 1:

Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).
Example 2:

Input: rating = [2,1,3]
Output: 0
Explanation: We can't form any team given the conditions.
Example 3:

Input: rating = [1,2,3,4]
Output: 4


Constraints:

n == rating.length
3 <= n <= 1000
1 <= rating[i] <= 105
All the integers in rating are unique.
 */

 /**
 * @param {number[]} rating
 * @return {number}
 */

// Input: an array of ratings
// Output: a number of teams
// Constraints: n == rating.length
//              3 <= n <= 1000
//              1 <= rating[i] <= 105
//              All the integers in rating are unique.
// Edge cases: none
var numTeams = function(rating) {
  // create a count variable
  // iterate over input array from i = 0
    // iterate over input array from j = i + 1
      // iterate over input array from k = j + 1
        // if rating[i] < rating[j] < rating[k] or rating[i] > rating[j] > rating[k]
          // increment count
  // return count
  let count = 0;
  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      for (let k = j + 1; k < rating.length; k++) {
        if ((rating[i] < rating[j] && rating[j] < rating[k]) || (rating[i] > rating[j] && rating[j] > rating[k])) {
          count++;
        }
      }
    }
  }
  return count;
};

/*
Alternate Solution:

const numTeams = (rating) => {
  // if number of ratings is less than 3
    // no valid team can be created, return 0
  if(rating.length < 3) return 0;
  let result = 0;

  // create an array to store count of ratings that are bigger than rating[i]
  let greaterThan = new Array(rating.length).fill(0);
  // create an array to store count of ratings that are less than rating[i]
  let lessThan = new Array(rating.length).fill(0);

  // iterate over input array
  for(let i = 0; i < rating.length; i++) {
      // iterate over input array from next element
      for(let j = i + 1; j < rating.length; j++) {
          // if inner loop's current element is bigger than outer loop's current element
          if(rating[j] > rating[i]) {
              // increment count of elements that are bigger than current element
              ++greaterThan[i];
          // if inner loop's current element is less than outer loop's current element
          } else if(rating[j] < rating[i]) {
              // increment count of elements that are smaller than current element
              ++lessThan[i];
          }
      }
  }
  // iterate over input array until 2 elements from the end of input array
  for(let i = 0; i < rating.length - 2; i++) {
      // iterate over input array
      for(let j = i + 1; j < rating.length; j++) {
          // if inner loop's current element is bigger than outer loop's current element
          if(rating[j] > rating[i]) {
              // add count of elements that are bigger than rating[j] (rating[k]) to result
              result += greaterThan[j];
          // if inner loop's current element is smaller than outer loop's current element
          } else if(rating[j] < rating[i]) {
              // add count of elements that are smaller than rating[j] (rating[k]) to result
              result += lessThan[j];
          }
      }
  }

  return result;
};
 */