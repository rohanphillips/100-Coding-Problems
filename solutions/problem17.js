const digits = "23";


const letterCombinations = function(digits) {
  const charMap = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"] ;
  const myNumbers = digits.split("")
  if(myNumbers.length === 0)  return []
  let comboList = [""]
  for(let i = 0; i < myNumbers.length; i++){
    const currentNum = myNumbers[i];
    if(currentNum > 1 && currentNum < 10){
      const letters = charMap[currentNum];
      while(comboList[0].length == i){
        permutation = comboList.shift();
        for(let j = 0; j < letters.length; j++){
          comboList.push(permutation + letters.charAt(j))
        }
      }
    }
  }
  return comboList;
};

console.log("result:", letterCombinations(digits))