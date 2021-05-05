const strs = ["", "fc"]
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return "";
  const s = strs[0];
  let prefix = "";
  for(let i = 0; i < s.length; i++) {
    prefix = s.substring(0, i + 1);
    let matchCount = 1;
    for(let j = 1; j < strs.length; j++) {
      const compare = strs[j].substring(0, i + 1);
      if(prefix === compare){
        matchCount++;
      }
    }
    if(prefix.length === 1 && matchCount !== strs.length) return "";
    if(matchCount !== strs.length){
      prefix = s.substring(0, i);
      break;
    }
  }
  return prefix;
};

console.log("result:", longestCommonPrefix(strs))