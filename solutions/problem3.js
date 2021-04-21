
const myString = "";

var lengthOfLongestSubstring = function(s) {
  const splitString = s.split('') 
  let found = [];
  let foundList = [];

  if (splitString.length === 0){
    return 0;
  }
  for (let i=0; i<splitString.length; i++) {    
    found = [];
    found.push(splitString[i])
    for (let j=i+1; j<splitString.length; j++) {
      if (found.includes(splitString[j]) === false){
        found.push(splitString[j])
      } else {
        break;
      }
    }
    foundList.push(found.length)
  } 
  return Math.max.apply(Math, foundList);
};
// 
console.log("result:", lengthOfLongestSubstring(myString))