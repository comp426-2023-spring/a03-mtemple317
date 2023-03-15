/* This is going to be the main file and also where you will put your exported RPS and RPSLS function(s).*/

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
function winLose (shot, comChoice) {
  if (shot === comChoice){
    return "tie";
   } else if (shot === rock) {
    if (comChoice === scissors) {
      return "win";
    } else if (comChoice === paper) {
      return "lose";
    }
  }
  else if (shot === paper) {
    if (comChoice === rock) {
      return "win";
    } else if (comChoice === scissors) {
      return "lose";
    }
  }
  else if (shot === scissors) {
    if (comChoice === rock) {
      return "lose";
    } else if (comChoice === paper) {
      return "win";
    }
  }};
  export function rps(shot) {
      const player = shot.toLowerCase();
      const opponent = comChoice();
      const result = winLose();
      if (shot === null || shot === undefined){
        return {
          'player': player}
        }
       if (shot.includes(shot)){
        return {
        'player': player,
        'opponent': opponent,
        'result': result,
      };
    }
  }
/*export function rps () {
  console.log(JSON.stringify);
("player: " + shot + "opponent: " + comChoice + "result: " + winLose)
}*/
//export {rps};
