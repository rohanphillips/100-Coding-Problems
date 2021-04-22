
const s = "ab"

const longestPalindrome = function(s) {
  if (s == null || s.length < 1) return "";
  let start = 0; let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    console.log("len1:", len1);
    let len2 = expandAroundCenter(s, i, i + 1);
    console.log("len2:", len2);
    let len = Math.max(len1, len2);
    console.log("len:", len);
    if (len > end - start) {
        start = i - (len - 1) / 2;
        console.log("start:", start)
        end = i + len / 2;
        console.log("end:", end)
    }
  }
  return s.substring(start, end + 1);
}

const expandAroundCenter = function(s, left, right) {
  let L = left; let R = right;
  while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
      L--;
      R++;
  }
  return R - L - 1;
}
console.log("result:", longestPalindrome(s))