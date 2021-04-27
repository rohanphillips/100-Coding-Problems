const s = "00000-42 a1234"

var myAtoi = function(s) {
  let multiplier = 1;
  let firstCharacters = ["-", "+", " "]
  let storage = [];
  let multiplierCount = 0;
  let n = 0;
  if (isNaN(s[0]) === false || firstCharacters.includes(s[0])){
    for (let i = 0; i < s.length; i++) {
      let isOperation = firstCharacters.includes(s[i]);
      if (isOperation) {
        if (s[i] === "-") {
          multiplier = -1;
          multiplierCount++;
        }
        if (s[i] === "+") {
          multiplierCount++;
        }
      }
      if (s[i] === ".") {break}
      
      if (multiplierCount >= 2 || (isNaN(s[i]) && isOperation === false)) {
        return 0;
      }
      if (isNaN(s[i]) === false){
        storage.push(s[i]);
      }
    }
    n = storage.join("") * multiplier;
    if (n > Math.pow(2, 31) - 1){
      n = Math.pow(2,31) - 1
    } else if (n < Math.pow(-2, 31)){
      n = Math.pow(-2, 31)
    }
  }
  return n;
};

console.log("result:", myAtoi(s))