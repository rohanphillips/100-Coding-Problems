const n=50;

var intToRoman = function(num) {
  const table = [[1000, "M"], [ 900, "CM"], [ 500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]] 
  const result = []
  for(let i=0; i<table.length; i++) {
    const key = table[i];
    const divisor = key[0];
    let int = Math.trunc(num/divisor)
    num = num-int*divisor;
    for(let j=0; j<int; j++) {
      result.push(key[1])
    }
  }
  return result.join("");
};

console.log("result:", intToRoman(n))