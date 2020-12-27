"use strict";

function openReadFile () {
 
    const fs = require('fs') 

    fs.readFile('seed_text.txt', 'utf-8', (err, data) => { 
        
        if (err) throw err; 
        console.log(data); 
    }) ;
}

openReadFile();

function makeChains () {

}

function makeText () {

}