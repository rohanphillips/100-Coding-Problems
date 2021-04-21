
const myString = "dvdf";

var lengthOfLongestSubstring = function(s) {
  const splitString = s.split('') 
  let found = [];
  let foundList = [];
  let i;
  if (splitString.length === 0){
    return 0;
  }
  for (i=0; i<splitString.length; i++) {    
    if (found.includes(splitString[i]) === false){
      found.push(splitString[i])
    } else {
      foundList.push(found.length)
      found = []
      found.push(splitString[i])
    }
  } 
  if (found.length > 0){
    foundList.push(found.length)
  }
  return Math.max.apply(Math, foundList);
};
// 
console.log("result:", lengthOfLongestSubstring(myString))