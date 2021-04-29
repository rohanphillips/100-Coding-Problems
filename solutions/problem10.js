const s = "aaa";
const p = "ab*ac*a";

// "aaa"
// "ab*ac*a" true
// "aab"
// "c*a*b"
// "mississippi"
// "mis*is*ip*."
var isMatch = function(s, p) {
  if(isValidPattern(p) === false || isValidString(s) === false || containsAllPatternChars(s, p) === false) return false
  let willRepeat = false;
  let patternPointer = 0;
  let newChar = "";
  let anyRepeatingCharacterHaltCharacter;
  for(let i = 0; i < s.length; i++) {
    const isAnyChar = isAnyCharacter(p, patternPointer);
    const isRepeating = isRepeatingCharacter(p, patternPointer);  
    const currentChar = s[i];  
    console.log("i:", i, " char:", currentChar, " willRepeat:", willRepeat, " patternPointer:", patternPointer, " pattern Character:", p[patternPointer]);
    console.log("isAnyChar:", isAnyChar, " isRepeating:", isRepeating);    
    if(willRepeat) {
      console.log("isRepeating")
      if (currentChar !== newChar){
        console.log("patternPointer >= p.length:", patternPointer >= p.length, " currentChar !== p[patternPointer]:", currentChar !== p[patternPointer], " p[patternPointer]:", p[patternPointer])
        if(patternPointer >= p.length || (currentChar !== p[patternPointer] && newChar !== ".")){
          willRepeat = false; 
          patternPointer++; 
          console.log("cancel willRepeat");
        }        
      }
      if(currentChar === p[patternPointer] || currentChar === anyRepeatingCharacterHaltCharacter){
        willRepeat = false;
        console.log("cancel willRepeat1");
      }
    }
    if(willRepeat === false){
      if(isAnyChar === false && isRepeating === false) {
        if(currentChar !== p[patternPointer]){
          console.log("returning false")
          return false;
        } else if(currentChar !== newChar){
          patternPointer++;
          console.log("patternPointer inc")
        }
      } else if(isAnyChar && isRepeating === false) {
        patternPointer++;
      } else if(isRepeating){
        if(currentChar !== p[patternPointer]  && isRepeatingCharacter(p, patternPointer + 2) === false && isAnyChar === false) {
          console.log("isRepeating Cancel", isRepeatingCharacter(p, patternPointer + 2))
          return false;
        }
        willRepeat = true;
        anyRepeatingCharacterHaltCharacter = p[patternPointer + 2];
        if(isAnyChar){
          newChar = ".";          
        } else {
          newChar = currentChar;
          patternPointer = patternPointer + 2;
          console.log("patternPointer + 2")
        }
      }
    }
    console.log("anyRepeatingCharacterHaltCharacter:", anyRepeatingCharacterHaltCharacter)
    if(i === s.length - 1 && patternPointer < p.length && isRepeatingCharacter(p, patternPointer) === false && anyRepeatingCharacterHaltCharacter !== currentChar) {
      console.log("end char returning false")
      return false;
    }
    
  }
  return true;
};

const containsAllPatternChars = function (s, p){
  const chars = s.split("");
  for(let i = 0; i < p.length; i++){
    if(chars.includes(p[i]) === false && isValidString(p[i]) && isRepeatingCharacter(p, i) === false ){
      return false;
    }
  }
  return true;
}

const isAnyCharacter = function(p, pointer) {
  return p[pointer] === "."
}

const isRepeatingCharacter = function(p, pointer) {
  return p[pointer + 1] === "*";
}

const isValidString = function(s) {
  return /^[a-z]+$/g.test(s) === true ? true : false;
}

const isValidPattern = function(p) {
  return /[a-z*.]+$/g.test(p) === true ? true : false;
}

console.log("result:", isMatch(s, p))