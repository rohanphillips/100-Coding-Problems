const s = "XIV";

var romanToInt = function(s) {
  const table = [[1000, "M"], [ 900, "CM"], [ 500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]] 
  let found;
  let sum = 0;
  for(let i = 0; i < s.length; i++) {
    found = table.find((element => element[1] === s.substring(i, i+2)))
    if(found === undefined) {
      found = table.find((element => element[1] === s[i]))
    } else {      
      i += 1;
    }
    sum += found[0];
  }
  return sum;
};

console.log("result:", romanToInt(s))