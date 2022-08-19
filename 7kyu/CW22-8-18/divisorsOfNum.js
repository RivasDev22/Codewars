//RivasDev22 Daily Codewars - Count the Divisors of a Number

//Count the number of divisors of a positive integer n.

//Random tests go up to n = 500000.

//
//Pr: n - number to test up to

//Rt: number of divisors n has

//Ex: getDivisorsCnt(10) returns 4 / getDivisorsCnt(54) returns 8

//

function getDivisorsCnt(n){
  
    //initalize counter
    let divi = 0
    
    //Loop through counter and divide by input
    
    for(let i = n; i > 0 ; i--){
    //If the remainder is 0, add to the divisor count
      n % i == 0 ? divi++ : 0;
    }
    //return result
      return divi;
  }

//Passed