
const nums = [1,1,-2];
var threeSum = function(nums) {
  if(nums.length <= 2) return [] 
  let output = [];
  let newTriple;
  const sorted = nums.sort(function(a,b){return a - b})
  for(let i = 0; i < sorted.length; i++){
    if(i > 2 && sorted[i] > 0) break;
    for(let j = i + 1; j < sorted.length; j++){
      if(sorted[i] + sorted[j] > 0) break;
      for(let k = j + 1; k < sorted.length; k++){
        if(sorted[i] + sorted[j] + sorted[k] > 0) break;
        if(i !== j && i !== k && j !== k){
          newTriple = [];
          if(sorted[i] + sorted[j] + sorted[k] === 0){
            newTriple.push(sorted[i]);
            newTriple.push(sorted[j]);
            newTriple.push(sorted[k]);
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