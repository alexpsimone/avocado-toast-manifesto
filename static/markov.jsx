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

function randomStartingWord(map) {

    const words = Array.from(map);
    const wordsSize = words.length;
    const randomNum = Math.random();

    return words[Math.floor(wordsSize * randomNum)][0];

}

function randomNextKey(map, word) {

    if (map.has(word)) {

        const valuesArray = map.get(word);

        if (valuesArray.length === 1) {
            return map.get(word)[0];
        } else {
            const wordsSize = valuesArray.length;
            const randomNum = Math.random();
            return valuesArray[Math.floor(wordsSize * randomNum)];
        }; 
    } else {
        return 'avocado';
    };
}

function  writeManifesto() {

    // Open the seed text file and make a map of words and next words they can chain with.
    const fs = require('fs');
    const seedText = fs.readFileSync('seed_text.txt', 'utf-8');
    const chains = makeChains(seedText);

    let lastWord = randomStartingWord(chains);  // Start by randomly selecting a word to start with.
    let manifestoArray = [lastWord];                 // Initialize an array that will contain all the words in the chain.
    let sentenceCount = 0;                      // Initialize a sentence counter (we'll stop when 4 sentences are written).

    // Push chains of words to the manifesto array, incrementing the sentence counter when a period is encountered.
    // Stop pushing words to the array when 4 sentences are written.
    while(sentenceCount < 4) {

    let nextWord = randomNextKey(chains, lastWord);
    manifestoArray.push(nextWord);

    if (nextWord.slice(-1) === ".") {
            sentenceCount += 1;
    };

    lastWord = nextWord;

    }

    // connect all words in the manifesto to create a sentence.
    return manifestoArray.join(" ");

}
