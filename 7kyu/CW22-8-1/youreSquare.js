//RivasDev22 Daily Codewars - You're a square!

//Given an integral number, determine if it's a square number

//
//Pr: n - int

//Rt: true if int is a square number

//Ex: isSquare(25) returns true

var isSquare = function(n){
    //Determine if square root of n has a remainder, if not then return true
    if (n >= 0 && Math.sqrt(n) % 1 == 0){
      return true
    }
    else return false;
  }

//Passed