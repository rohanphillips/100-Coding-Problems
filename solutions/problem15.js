
const nums = [-1,0,1,2,-1,-4,4];
var threeSum = function(nums) {
  if(nums.length <= 2) return [] 
  let output = [];
  let newTriple;
  const sorted = nums.sort(function(a,b){return a - b})
  let i = 0;
  let j = sorted.length - 1;
  let k = 0;
  console.log("sorted:", sorted)
  while(j - i > 1){
    console.log("i:", i, "j:", j)
    const mySum = sorted[i] + sorted[j];
    console.log("mySum:", mySum)
    if(mySum >= 0){
      k = findKUp(i,j,sorted, mySum);
      if(k > 0){
        console.log("StoreUp", sorted[k])
        newTriple = createNewTriple(i, k, j, sorted).sort();
        if (exists(newTriple, output) === false){
          output.push(newTriple);
        }
      }
    } else if(mySum < 0){
      k = findKDown(i,j,sorted, mySum);
      if(k < 0){
        console.log("StoreDn")
      }
    }
    i++;
    j--;
  }
  return output.sort();
};

const createNewTriple = function (i, k, j, sorted){
  let triple = [];
  triple.push(sorted[i]);
  triple.push(sorted[j]);
  triple.push(sorted[k]);
  return triple;
}

const findKUp = (i, j, sorted, find) => {
  for(let k=i + 1; k < j; k++){
    if(sorted[k] === find){
      return k;
    } else if(sorted[k] > find) {
      return -1;
    }
  }
  return -1;
}

const findKDown = (i, j, sorted, find) => {
  for(let k=j-1; k >= 0; k--){
    if(sorted[k] === find){
      return k;
    } else if(sorted[k] < find) {
      return -1;
    }
  }
  return -1;
}

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