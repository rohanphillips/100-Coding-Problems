const nums = [-1,7,0,-4];
const target = 1;

var threeSumClosest = function(nums, target) {
  if(nums.length <= 2) return [] 
  let output = [];  
  let newTriple;
  let diff;
  const sorted = nums;
  for(let i = 0; i < sorted.length - 1; i++){
    let hash = [];
    for(let j = i + 1; j < sorted.length; j++){
      let x = target - (sorted[i] + sorted[j])
      console.log("target:", target - x, "x:", x, "sortedi:", sorted[i], "sortedj:", sorted[j], "sum:", sum)
      if(hash.includes(x) || (target - x < diff && target - x > diff)){
        console.log("match")
        newTriple = [];
        newTriple.push(x);
        newTriple.push(sorted[i]);
        newTriple.push(sorted[j]);
        // if(exists(newTriple.sort(), output) === false){
        //   output.push(newTriple);
        // }
      } else {
        hash.push(sorted[j]);
      }
    }
  }
  return output.sort();
};
console.log("result:", threeSumClosest(nums, target))