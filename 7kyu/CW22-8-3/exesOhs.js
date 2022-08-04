//RivasDev22 Daily Codewars - Exes and Ohs

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//
//Pr: str - string that may not have any x or o in it

//Rt: true amount of xs is equal to amount of os

//Ex: XO("xxOo") returns true

function XO(str) {
  //initialize counters fo xs and os
    let ex = 0
    let oh = 0
    
    //loop through string length
    for (let i = 0; i < str.length; i++){
        //Check letter in string
      let l = str[i]
      //Add to ex count is an  x or X
      if (l === 'x' || l === 'X')
      {
        ex++;
      }
      //Add to oh count if o or O
      else if (l === 'o' || l === 'O')
      {
        oh++;
      }
    }
  
    //Returns true is the amounts are eqaul
  return ex === oh;
}

//Passed