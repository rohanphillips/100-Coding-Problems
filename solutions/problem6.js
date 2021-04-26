const s ="PAYPALISHIRING";
const numRows = 3;

const convert = function(s, numRows) {
  let record = [];
  let direction = 1;
  let location = 0;
  for (let i=0; i<s.length; i++) {
    if (record[location] === undefined) {record[location] = ""}
    record[location] = record[location].concat(s.charAt(i))
    if (numRows <= 1){
      direction = 0;
    } else if (location == numRows - 1) {
      direction = -1;
    } else if (location == 0){
      direction = 1;
    }
    location  = location + direction;
  }  
  return record.join("");
};

console.log("result:", convert(s, numRows) )

