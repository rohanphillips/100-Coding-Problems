

class Diamond {
  sequenceNumber(n){
    const firstNumber = 1;
    const diff = 2; // this represents the difference between the numbers as the sequence increases
    return n > 0 ? firstNumber + diff * (n - 1) : 0;
  }
  makeDiamond(letter) {
    let result = [];
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1'
    const space = " ";
    const location = alphabet.indexOf(letter)
    let insideSpaces = this.sequenceNumber(location); //will be decremented by 2
    let outsideSpaces = 0; //will be incremented by 1,
    //As I looked at the pattern, I saw that it would be better to start from the letter location
    //and work backwards
    console.log("insideSpaces:", insideSpaces)
    if(location === 0) return letter + "\n"
    for(let i=location; i >= 0; i--){
      const outsideSpace = space.repeat(outsideSpaces);
      const insideSpace = space.repeat(insideSpaces > 0 ? insideSpaces : 0);
      const currentLetter = alphabet[i]
      const row = outsideSpace + currentLetter + insideSpace + currentLetter + outsideSpace +"\n"
      i > 0 ? result.push(row) : result.push(outsideSpace + currentLetter + outsideSpace + "\n");
      outsideSpaces ++;
      insideSpaces -= 2;      
    }
    console.log("result:", result)
    //because first element of the result array is only used once, I'll use slice to remove it, that
    //will leave the letter required to create the match
    const mirror = result.slice(1, result.length);
    console.log("mirror;", mirror)
    //I'm going to reverse the order of result and then append mirror to the end
    //I'll join it here also
    const newResult = result.reverse().concat(mirror).join('');
    return newResult
  }
}

//-A-
//B-B
//-A-

// --A--
// -B-B-
// C---C

// ---A---
// --B-B--
// -C---C-
// D-----D


// ----A----
// ---B-B---
// --C---C--
// -D-----D-
// E-------E
// -D-----D-
// --C---C--
// ---B-B---
// ----A----

const d = new Diamond
console.log(d.makeDiamond("P"))