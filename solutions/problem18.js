const nums = [0, 1, -1];
var threeSum = function(nums, target) {
  if(nums.length <= 2) return [] 
  let output = [];
  
  let newTriple;
  const sorted = nums;
  for(let i = 0; i < sorted.length - 1; i++){
    let hash = [];
    console.log("i:", i, "number:", sorted[i])
    for(let j = i + 1; j < sorted.length; j++){
      console.log("j:", j, "number:", sorted[j])
      let x = target - (sorted[i] + sorted[j])
      console.log("x:", x, "hash includes x:", hash.includes(x))
      if(hash.includes(x)){
        newTriple = [];
        newTriple.push(x);
        newTriple.push(sorted[i]);
        newTriple.push(sorted[j]);
        if(exists(newTriple.sort(), output) === false){
          output.push(newTriple);
        }
      } else {
        console.log("storing in hash:", sorted[j])
        hash.push(sorted[j]);
      }
      console.log("end j loop")
    }
    console.log("end iloop")
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
console.log("result:", threeSum(nums, 0))