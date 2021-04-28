const s = "aa";
const p = "a.*";

var isMatch = function(s, p) {
  console.log("isValidString:", isValidString(s))
  console.log("isValidPattern:", isValidPattern(p))
  if(isValidPattern(p) == false || isValidString(s) == false) return false
  
};

const isValidString = function(s) {
  return /^[a-z]+$/g.test(s) == true ? true : false;
}

const isValidPattern = function(p) {
  return /[a-z*.]+$/g.test(p) == true ? true : false;
}

console.log("result:", isMatch(s, p))