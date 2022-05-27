
// 1. SUM ZERO
//Runtime: O(n)
let array = [28, 43, -12, 30, 4, 0, 12]


let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}
console.log(value)


//2. UNIQUE CHARACTERS
//Runtime: O(n)
const uniqueChars = (str) => {
    let returned = true
  
    let split = str.split('')
  
    for(let i = 0; i < split.length; i++){
      for(let j = i + 1; j < split.length; j++){
        if(split[i] === split[j]){
          returned = false
        }
      }
    }
  
    return returned
  }

  console.log(uniqueChars('monday'))

  //3. PANGRAM SENTENCE
  // Runtime: O(n)
  const isPangram = (string) => {
    if (string.includes("a" && "b" && "c" && "d" && "e" && "f" && "g" && "h" && "i" && "j" && "k" && "l" && "m" && "n" && "o" && "p" && "q" && "r" && "s" && "t" && "u" && "v" && "w" && "x" && "y" && "z")) {
            console.log(true)
        } else {
            console.log(false)
        }
  }

  isPangram('abcdefghijklmnopqrstuvwxyz')


  //4. LONGEST WORD
  // Runtime: O(n2)
  function longestStringForLoop(arr) {
      let word = "";
      for (let i = 0; i < arr.length; i++) {
          if (word.length < arr[i].length) {
              word = arr[i];
            }
        }
        return word.length;
    }
    
    console.log(longestStringForLoop(['boop', 'bloomburg', 'hello']));
