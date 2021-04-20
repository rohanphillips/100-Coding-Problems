// https://leetcode.com/problems/add-two-numbers/

console.log("Problem2")

const l1 = [2,4,3];
const l2 = [5, 6, 4];

const addTwoNumbers = function(l1, l2) {
  var i = Number(l1.reverse().join(""));
  console.log("i:", i)
  var j = Number(l2.reverse().join(""));
  return i + j;
};

console.log("result: ", addTwoNumbers(l1, l2));