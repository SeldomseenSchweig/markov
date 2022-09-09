const fs = require('fs');
const axios = require('axios').default;
const markov = require('./markov')
const process = require('process')




if (process.argv[2] =='url')
{
    let filename = process.argv[3]
    if (isValidHttpUrl(filename)){
        webResponse(filename)
         
    }else{
        console.log(` Url: ${process.argv[3]} is invalid`)
        process.kill(1)
    }
}else if(process.argv[2] =='file'){
    let filename =  process.argv[3]
    fs.readFile(filename, "utf8", (err, data)=> {
        if(err){
            console.log(err)
            process.kill(1)
            
        }
        new markov.MarkovMachine(data)
    })
}

async function webResponse(filename){
    const response = await axios.get(filename);
    data=response.data;
    new markov.MarkovMachine(data)
}


function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }
