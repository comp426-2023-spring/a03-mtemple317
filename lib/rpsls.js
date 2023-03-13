/* This is going to be the main file and also where you will put your exported RPS and RPSLS function(s).*/

//export to rps-cli.js and rpsls-cli.js
//add JS functions here too
//export function rps (_shot){};
//export function rpsls (_shot){};
var shot = ["rock", "paper", "scissors"];
var comChoice = Math.floor(Math.random() * 3);
     switch (comChoice) { 
       case 0: comChoice = "rock"; 
         break; 
       case 1: comChoice = "paper"; 
         break; 
       case 2: comChoice = "scissors"; 
         break; 
     };
function winLose (shot, comChoice, result) {
  if (shot === comChoice)
    tie;
  else if (shot === rock) {
    if (comChoice === scissors) {
      this.result='win';
    } else if (comChoice === paper) {
      this.result='lose';
    }
  }
  else if (shot === paper) {
    if (comChoice === rock) {
      this.result='win';
    } else if (comChoice === scissors) {
      this.result= 'lose';
    }
  }
  else if (shot === scissors) {
    if (comChoice === rock) {
      this.result= 'lose';
    } else if (comChoice === paper) {
      this.result= 'win';
    }
console.log(JSON.stringify);
("player: " + userChoice + "opponent: " + comChoice + "result: " + result)
  }};
export function rps (shot, comChoice, winLose) {}
