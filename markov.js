/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = new Object
    let i = 0
    let length = (this.words).length
    chain[this.words[length-1]] = []
    chain[this.words[length-1]].push(null);

          while (i <length-1) {
            if(this.words[i] in chain){
                chain[this.words[i]].push(this.words[i+1]);
                i++
              }else{
                chain[this.words[i]] = [];
                chain[this.words[i]].push(this.words[i+1]);
                i++
              }
            }
    this.makeText(chain)
    

    }

  


  /** return random text from chains */

  makeText(item, numWords = 100) {
    console.log(item)
    let keyLength = 0
    let word = ''

    const keys = Object.keys(item);
    let randKey = keys[Math.floor(Math.random() * keys.length)];
    
    let script = []
    script.push(item[randKey])

    let i = 0;

        while(i < numWords){
          // Getting the legth of values for the current letter
            keyLength = item[script[i]].length;
          // choosing a random value(next word) from the values of the current word 
            word = item[script[i]][ Math.floor(Math.random() * keyLength)];

          // if the word chosen is null, kill the app, print the string, we'l do it live!
            if(word===null){
            // join the string, add a period, call it a day
              script = script.join(" ")
              script += "."
              console.log(script)
              return script

            }else{
              //If it's not null, pop it into the array
              script.push(word)
              i++
            }
          }
// if null is never hit, join the array, end program, print sentence
    script = script.join(" ")
    script += "."
    console.log(script)
    return script 




  }
}

m = new MarkovMachine('cat in the hat lat blue pink red orange blue blue blue blue black red green purple he didnt know where to got so went on his blue')