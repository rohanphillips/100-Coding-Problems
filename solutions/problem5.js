
const s = "abba"

var longestPalindrome = function(s) {
  let start = 0
  let end = 0;
  for (let i = 0; i < 1; i++) {
    let len1 = expandFromCenter(s, i, i)
    console.log("L1:", len1)
    let len2 = expandFromCenter(s, i, i+1)
    console.log("L2:", len2)
    let len = Math.max(len1, len2)
    console.log("len", len)
    if (len > end - start){
      start = 
    }
  }
};

const expandFromCenter = function(s, l, r){
  let L = l; let R = r;
  while(L > 0 && R < s.length && s.charAt(L) === s.charAt(R)){
    L--; R++;
  }
  console.log("expandFromCenter", R - L)
  return R - L - 1
}
console.log("result:", longestPalindrome(s))