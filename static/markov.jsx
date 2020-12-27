"use strict";

function makeChains(data) {
    
    ////////////////////////////////////////////////
    // TODO: remove tabs, carriage returns, etc. //
    //////////////////////////////////////////////
    const words = data.split(" ");  // Makes a list of all words in the seed file.
    let chains = new Map();         // Instantiate an empty hashmap.

    // Check the hashmap for words from the seed file.
    // If the word is an existing key, then push the following word in the text to its values.
    // Otherwise, add the new key with a value of the following word, in an array.
    for (let idx = 0; idx < (words.length - 2); idx += 1) {
        
        let key = words[idx];
        if (chains.has(key)) {
            chains.get(key).push(words[idx + 2]);
        } else {
            chains.set(key, [words[idx + 2]]);
        };
    };

    return chains;
}

const fs = require('fs');
const seedText = fs.readFileSync('seed_text.txt', 'utf-8');
const chains = makeChains(seedText);

console.log(chains);