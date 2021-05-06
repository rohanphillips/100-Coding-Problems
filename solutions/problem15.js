
const nums = [0];
var threeSum = function(nums) {
  if(nums.length <= 2) return [] 
  let output = [];
  
  let newTriple;
  const sorted = nums;
  for(let i = 0; i < sorted.length - 1; i++){
    let hash = [];
    for(let j = i + 1; j < sorted.length; j++){
      let x = 0 - (sorted[i] + sorted[j])
      if(hash.includes(x)){
        newTriple = [];
        newTriple.push(x);
        newTriple.push(sorted[i]);
        newTriple.push(sorted[j]);
        if(exists(newTriple.sort(), output) === false){
          output.push(newTriple);
        }
      } else {
        hash.push(sorted[j]);
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