const number = -123;

var reverse = function(x) {
  multiplier = x >= 0 ? 1 : -1;
  let n = x * multiplier + "";
  n = n.split("").reverse().join("") * multiplier;
  return n > Math.pow(-2, 31) && n < Math.pow(2,31) - 1 ? n : 0;   
};

console.log("result:", reverse(number))