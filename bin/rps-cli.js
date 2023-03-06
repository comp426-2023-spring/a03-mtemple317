#!/usr/bin/env node
//These are going to be the files that run when you link/install the package and run node-rps and node-rpsls, respectively
//import { rps } from "/lib/rpsls.js"
import minimist from 'minimist'
let args = minimist(process.argv.slice(2))
const empty = Object.keys(args).length ===1;
if (args.h || empty === true){

console.log(`Usage: node-rps [SHOT] 
Play Rock Paper Scissors (RPS)
-h, --help      display this help message and exit
-r, --rules     display the rules and exit
Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}
`)
//process.exit(0)
}
if (args.r){

    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors
    `)
    //process.exit(0)
    }
if (args.invalid){
    console.error(`[ARGUMENT] is out of range. Rules for Rock Paper Scissors:'`)}
