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


          while (i < (this.words).length - 1) {

              if(this.words[i] in chain){
                console.log('hello')
                chain[this.words[i]].push(this.word[i+1])
                i++
              }else{
                chain[this.words[i]] = []
                chain[this.words[i]].push(this.words[i+1])
                i++
              }
            }
      console.log(chain)
    }

  


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

m = new MarkovMachine('cat in the hat')
