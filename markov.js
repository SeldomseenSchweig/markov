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
    // set up the container for the markov machine words
    let chain = new Object
    let i = 0
    let length = (this.words).length
    // for the last word in the map put null
    chain[this.words[length-1]] = []
    chain[this.words[length-1]].push(null);
    // got through the map, if the word is already in the chain, add the next wrod to it's array
   

          while (i <length-1) {
            if(this.words[i] in chain){
                chain[this.words[i]].push(this.words[i+1]);
                i++
              }else{
                 // if it's not in the array, set up an empty array for it's value and add the next word to it's value
                chain[this.words[i]] = [];
                chain[this.words[i]].push(this.words[i+1]);
                i++
              }
            }
    this.makeText(chain)
    
    }
  
  /** return random text from chains */

  makeText(item, numWords = 100) {
    
    let keyLength = 0
    let word = ''
    // Get all the keys from the object chain
    const keys = Object.keys(item);
    //get a random key from the chain and add it as the first word in the array
    let randKey = keys[Math.floor(Math.random() * keys.length-1)];
    //getting a single value to add as a starter to the erray
    let starter =  item[randKey][Math.floor(Math.random() * item[randKey].length)]
    let script = []
    script.push(starter)

    let i = 0;

        while(i < numWords){
          // Getting the legth of values for the current letter
          try {
            keyLength = item[script[i]].length;
          } catch (error) {
            console.log(i)
            console.log(script[i])
            console.log(item[script[i]])
            process.kill(1)
 
          }

          // choosing a random value(next word) from the values of the current word 
            word = item[script[i]][ Math.floor(Math.random() * keyLength)];

          // if the word chosen is null, kill the app, print the string
            if(word===null){
            // join the string, add a period, call it a day
              script = script.join(" ")
              script += "."
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

module.exports ={

  MarkovMachine,


};
