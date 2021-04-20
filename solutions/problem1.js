
let nums = [2,7,11,15]
const target = 9

const twoSum = function(nums, target) {
  var i;
  var j;
  var myBreak = false;
  var result = [];
  for (i = 0; i < nums.length - 1; i++){
      for (j = i + 1; j < nums.length; j++){
          if (nums[i] + nums[j] === target){
              result.push(i)
              result.push(j)
              myBreak = true;
          }
          if(myBreak){
              break;
          }
      }
  }
  return result;
};

