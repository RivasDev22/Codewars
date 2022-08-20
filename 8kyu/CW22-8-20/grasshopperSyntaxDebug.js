//RivasDev22 Daily Codewars - Grasshopper - If/Else Syntax Debug

//While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

//checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

//The function receives one parameter health which will always be a whole number between -10 and 10.

//Code given:

//function checkAlive (health) {
    //if () {
        //health < 0
        //return false
      //} else () {
        //return true
      //}
    //}

//
//Pr: health - int to check if player is alive

//Rt: true if greater than 0, else false

//Ex: checkAlive(0) returns false

//Change into conditional function if statement

function checkAlive (health) {
    //check if health is greater than 0
    return health > 0 ? true : false;
  }

//Passed