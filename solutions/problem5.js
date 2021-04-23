
const s = "aaa"

var longestPalindrome = function(s) {
  if (s===null || s.length<1) return "";
  let start = 0; let end = 0;
  let left; let right;
  for (let i = 0; i < s.length; i++) {
     console.log("i:", i)
    left = i;
    // if (i-1 >= 0 && s.charAt(i-1) == s.charAt(i+1)){      
    //   left = i-1;
    //   console.log("left updated")
    // }
    if (i+1 < s.length && s.charAt(left) == s.charAt(i+1)) {
       console.log("adjust right")
      right = i+1;
    } else {
      right = i;
    }
     console.log("left:", left, " right:", right)
    const counter = expandAroundCenter(s, left, right);
    // console.log("counter:", counter)
    if ((right + counter) - (left - counter) > end - start){
      start = left - counter;
      end = right + counter;
      // console.log("start:", start, " end:", end)
      // console.log("start end updated")
    }
  }
  return s.substring(start, end + 1);
};

const expandAroundCenter = function(s, left, right){
  let counter = 0;
  // console.log("left - counter >= 0 && right + counter < s.length", left - counter >= 0 && right + counter < s.length)
  // console.log("s.charAt(left - counter)", s.charAt(left - counter))
  // console.log("s.charAt(right + counter)", s.charAt(right + counter))
  // console.log("s.charAt(left - counter) == s.charAt(right + counter)", s.charAt(left - counter) == s.charAt(right + counter))
  while (left - counter - 1 >= 0 && right + counter + 1 < s.length && s.charAt(left - counter - 1) == s.charAt(right + counter + 1)){
    counter++;
  }
  return counter;
}


console.log("result:", longestPalindrome(s))