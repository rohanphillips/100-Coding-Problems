

class Diamond {
  sequenceNumber(n){
    const firstNumber = 1;
    const diff = 2; // this represents the difference between the numbers as the sequence increases
    return n > 0 ? firstNumber + diff * (n - 1) : 0;
  }
  makeDiamond(letter) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1'.split('')
    const space = " ";
    const location = alphabet.indexOf(letter)
    let insideSpaces = this.sequenceNumber(location); //will be decremented by 2
    let outsideSpaces = 0; //will be incremented by 1,
    //As I looked at the pattern, I saw that it would be better to start from the letter location
    //and work backwards
    //create an array with just the letters I want to work with, reversed
    const processLetters = alphabet.slice(0, location + 1).reverse()
    //will now use map on the new array, will use index and pass in the new array - we'll need to get it's length
    const firstHalf = processLetters.map(function(letter, index, processLetters){
      const outsideSpace = space.repeat(outsideSpaces);
      const insideSpace = space.repeat(insideSpaces > 0 ? insideSpaces : 0);
      //decide on what the center text will look like
      const center = index === processLetters.length -1 ? letter : letter + insideSpace + letter
      //create our row
      const row = outsideSpace + center + outsideSpace +"\n"
      outsideSpaces ++;
      insideSpaces -= 2;  
      return row
    })
    //because first element of the firstHalf array is only used once, I'll use slice to remove it, that
    //will leave the letter required to create the match
    const mirror = firstHalf.slice(1, firstHalf.length);
    //I'm going to reverse the order of firstHalf and then append mirror to the end
    //I'll join it here also
    const newResult = firstHalf.reverse().concat(mirror).join('');
    return newResult
  }
}
const d = new Diamond
console.log(d.makeDiamond("C"))

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

