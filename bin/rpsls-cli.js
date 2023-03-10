#!/usr/bin/env node
/* These are going to be the files that run when you link/install the package and run node-rps and node-rpsls, respectively*/
//import { rpsls } from "../lib/rpsls.js"
import minimist from 'minimist'
let args = minimist(process.argv.slice(2))
const empty = Object.keys(args).length ===1;
const shot = ["rock", "paper", "scissors", "lizard", "spock"];
if (args.h || empty === true){

console.log(`Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}
`)
//process.exit(0)
}
if (args.r || args.rules){

    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors
    `)
    //process.exit(0)
    }
    if (!args.h && !args.r && (shot != 'rock' || 'paper' || 'scissors' || 'lizard' || 'spock')){
      console.error(`[ARGUMENT] is out of range`);
      console.log (`Usage: node-rpsls [SHOT]
      Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
      
        -h, --help        display this help message and exit
        -r, --rules       display the rules and exit
      
      Examples:
        node-rpsls        Return JSON with single player RPSLS result.
                          e.g. {"player":"rock"}
        node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"Spock","result":"lose"}

        Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

                          - Scissors CUTS Paper
                          - Paper COVERS Rock
                          - Rock SMOOSHES Lizard
                          - Lizard POISONS Spock
                          - Spock SMASHES Scissors
                          - Scissors DECAPITATES Lizard
                          - Lizard EATS Paper
                          - Paper DISPROVES Spock
                          - Spock VAPORIZES Rock
                          - Rock CRUSHES Scissors
      `);
      process.exit(0)}