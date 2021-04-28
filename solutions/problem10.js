const s = "aaaaab";
const p = ".*";

var isMatch = function(s, p) {
  if(isValidPattern(p) == false || isValidString(s) == false) return false
  let willRepeat = false;
  let patternPointer = 0;
  let currentChar = "";
  for(let i = 0; i < s.length; i++) {
    console.log("i:", i, " willRepeat:", willRepeat, " patternPointer:", patternPointer);
    console.log("isAnyChar:", isAnyChar(p, patternPointer), " isRepeating:", isRepeating(p, patternPointer));
    if(willRepeat == false){
      if(isAnyChar(p, patternPointer) == false && isRepeating(p, patternPointer) == false) {
        if(s[i] !== p[patternPointer]){
          return false;
        } else {
          patternPointer++;
        }
      } else if(isAnyChar(p, patternPointer) && isRepeating(p, patternPointer) == false) {
        patternPointer++;
      } else if(isRepeating(p, patternPointer)){
        willRepeat = true;
        currentChar = s[i];
        patternPointer = patternPointer + 2;
      }
    } else {
      if (s[i] !== currentChar){
        if(patternPointer >= p.length || s[i] !== p[patternPointer])
        willRepeat = false;
        
        console.log("cancel willRepeat");
      }
    }
  }
  return true;
};

const isAnyChar = function(p, pointer) {
  return p[pointer] == "."
}

const isRepeating = function(p, pointer) {
  return p[pointer + 1] == "*";
}

const isValidString = function(s) {
  return /^[a-z]+$/g.test(s) == true ? true : false;
}

const isValidPattern = function(p) {
  return /[a-z*.]+$/g.test(p) == true ? true : false;
}

console.log("result:", isMatch(s, p))