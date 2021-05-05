
const nums = [-1,0,1,2,-1,-4];
var threeSum = function(nums) {
  if(nums.length <= 2) return [] 
  let output = [];
  let newTriple;
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      for(let k = j + 1; k < nums.length; k++){
        if(i !== j && i !== k && j !== k){
          let newTriple = [];
          if(nums[i] + nums[j] + nums[k] === 0){
            newTriple.push(nums[i]);
            newTriple.push(nums[j]);
            newTriple.push(nums[k]);
            if(exists(newTriple.sort(), output) === false){
              output.push(newTriple);
            }
          }
        }
      }
    }
  }
  return output.sort();
};

const exists = (newTriple, store) => {
  for(let i = 0; i < store.length; i++){
    if(equals(newTriple, store[i])){
      return true;
    }
  }
  return false;
}

const equals = (a,b) =>{
  return a.length === b.length && a.every((v, i) => v === b[i]);
}
console.log("result:", threeSum(nums))