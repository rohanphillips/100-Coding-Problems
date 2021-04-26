
const s = "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"

var longestPalindrome = function(s) {
  if (s===null || s.length<1) return "";
  let start = 0; let end = 0;
  let left; let right;
  console.log("length:", s.length)
  for (let i = 0; i < s.length; i++) {
    left = i;
    if (i-1 >= 0 && s.charAt(i-1) == s.charAt(i+1) &&  (i > 1 || s.length % 2 == 1)) {      
      left = i-1;
    }
    if (i < s.length && s.charAt(left) == s.charAt(i + 1)) {
      right = i+1;
    } else {
      right = i;
    }
    const counter = expandAroundCenter(s, left, right);
    if ((right + counter) - (left - counter) > end - start){
      start = left - counter;
      end = right + counter;
    }
  }
  return s.substring(start, end + 1);
};

const expandAroundCenter = function(s, left, right){
  let counter = 0;
  while (left - counter - 1 >= 0 && right + counter + 1 < s.length && s.charAt(left - counter - 1) == s.charAt(right + counter + 1)){
    counter++;
  }
  return counter;
}


console.log("result:", longestPalindrome(s))