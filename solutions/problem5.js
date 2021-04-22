
const s = "aaaaaa"

var longestPalindrome = function(s) {
  const splitString = s.split('') 
  let result;

  if (splitString.length === 0){
    return 0;
  }
  result =splitString[0];
  console.log("stringLength:", splitString.length / 2);
  for (let j=0; j < splitString.length / 2 + 2; j++) {
    const window = j+1;
    for (let i=0; i<=splitString.length - window; i++) {     
      let myString = splitString.slice(i, i + window).join("");
      let mirror = JSON.parse(JSON.stringify(splitString.slice(i, i + window))).reverse().join("");
      if (myString === mirror){
        result = myString;
        console.log("i:", i, " j:", j, "result:", result);
        break;
      }
    } 
  }  
  return result;
};
console.log("result:", longestPalindrome(s))