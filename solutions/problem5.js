
const s = "civil"

const isEqual =  (a1, a2) => {
  let isEqual = true;
  for(let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]){
      isEqual = false;
      break;
    }
  } 
  return isEqual;
}

var longestPalindrome = function(s) {
  const splitString = s.split('') 
  let template = [];
  let result;

  if (splitString.length === 0){
    return 0;
  }
  result =splitString[0];
  for (let i=0; i<splitString.length; i++) {    
    template = [];
    template.push(splitString[i])
    for (let j=i+1; j<splitString.length; j++) {
      template.push(splitString[j]);
      console.log("slice:", splitString.slice(i, i + j));
      const mirror = template.map(a => a = a).reverse();      
      if (mirror.join("") === template.join("")){
        if (template.join("").length > result.length){
          result = template.join("");   
          console.log("result changed: ", result);                 
        }
        break;
      } 
    }
    console.log("next i")
  } 
  return result;
};
console.log("result:", longestPalindrome(s))