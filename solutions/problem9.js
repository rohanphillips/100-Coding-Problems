const x = 0;

var isPalindrome = function(x) {
  const original = x;
  if(x >= 0 && x <= 9) return true;
  if(x < 0) return false;
  let result = 0;

  while(x){
    const cut = x / 10 | 0;
    result = (result * 10) + (x % 10)
    x = cut;
  }
  return result === original;
};

console.log("result:", isPalindrome(x))