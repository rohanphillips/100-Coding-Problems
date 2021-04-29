const s = "aab";
const p = "c*a*b";
// "aab"
// "c*a*b"
// "mississippi"
// "mis*is*ip*."
var isMatch = function(s, p) {
  if(isValidPattern(p) == false || isValidString(s) == false || containsAllPatternChars(s, p) === false) return false
  let willRepeat = false;
  let patternPointer = 0;
  let currentChar = "";
  let anyRepeatingCharacterHaltCharacter = undefined;
  for(let i = 0; i < s.length; i++) {
    const isAnyChar = isAnyCharacter(p, patternPointer);
    const isRepeating = isRepeatingCharacter(p, patternPointer);    
    console.log("i:", i, " char:", s[i], " willRepeat:", willRepeat, " patternPointer:", patternPointer, " pattern Character:", p[patternPointer]);
    console.log("isAnyChar:", isAnyChar, " isRepeating:", isRepeating);    
    if(willRepeat) {
      console.log("isRepeating")
      if (s[i] !== currentChar){
        console.log("patternPointer >= p.length:", patternPointer >= p.length, " s[i] !== p[patternPointer]:", s[i] !== p[patternPointer], " p[patternPointer]:", p[patternPointer])
        if(patternPointer >= p.length || (s[i] !== p[patternPointer] && currentChar !== ".")){
          willRepeat = false; 
          patternPointer++; 
          console.log("cancel willRepeat");
        }
        if(s[i] === p[patternPointer] || s[i] === anyRepeatingCharacterHaltCharacter){
          willRepeat = false;
          console.log("cancel willRepeat1");
        }
      }
    }
    if(willRepeat == false){
      if(isAnyChar === false && isRepeating === false) {
        if(s[i] !== p[patternPointer]){
          console.log("returning false")
          return false;
        } else {
          patternPointer++;
          console.log("patternPointer inc")
        }
      } else if(isAnyChar && isRepeating === false) {
        patternPointer++;
      } else if(isRepeating){
        willRepeat = true;
        if(isAnyChar){
          currentChar = ".";
          anyRepeatingCharacterHaltCharacter = p[patternPointer + 2];
        } else {
          currentChar = s[i];
          patternPointer = patternPointer + 2;
          console.log("patternPointer + 2")
        }
      }
    }
  }
  return true;
};

const containsAllPatternChars = function (s, p){
  const chars = s.split("");
  for(let i = 0; i < p.length; i++){
    if(chars.includes(p[i]) === false && isValidString(p[i]) && isRepeatingCharacter(p, i) === false){
      return false;
    }
  }
  return true;
}

const isAnyCharacter = function(p, pointer) {
  return p[pointer] == "."
}

const isRepeatingCharacter = function(p, pointer) {
  return p[pointer + 1] == "*";
}

const isValidString = function(s) {
  return /^[a-z]+$/g.test(s) == true ? true : false;
}

const isValidPattern = function(p) {
  return /[a-z*.]+$/g.test(p) == true ? true : false;
}

console.log("result:", isMatch(s, p))