//RivasDev22 Daily Codewars - What's The Real Floor?

//Write a function that given a floor in the american system returns the floor in the european system.

//With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. 
//In case of above 13, they move down by two because there are two omitted numbers below them.

//Basements (negatives) stay the same as the universal level.

//
//Pr: n - floor number

//Ex: getRealFloor( 1) returns  0, getRealFloor(15) returns 13

function getRealFloor(n) {
    return n <=0 ? n : n > 13 ? n-2 : n-1;
    //If n is negative or 0 return the same, if more than 13 floors, then reduce two floors, else remove 1
  }