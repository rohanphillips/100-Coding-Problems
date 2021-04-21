
const n1 = [3]
const n2 = [-2,-1]

const reducer = (acc, curr) => acc + curr;

var findMedianSortedArrays = function(nums1, nums2) {
  const merged = nums1.concat(nums2).sort(function(a, b) {return a - b});
  console.log("merged", merged)
  let startingPoint;
  let additional;
  let result = [];
  if (merged.length % 2 === 0) {
    startingPoint = (merged.length / 2) - 1;
    additional = startingPoint + 2;
  } else {
    startingPoint = Math.floor(merged.length / 2)
    additional = startingPoint + 1;
  }
  result = merged.slice(startingPoint, additional);
  return result.reduce(reducer) / result.length;
};

console.log("result:", findMedianSortedArrays(n1, n2))