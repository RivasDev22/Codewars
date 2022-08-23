//RivasDev22 Daily Codewars - Is This a Triangle?

//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).

//
//Pr: a, b, c - int of given sides

//Rt: true if sides make a triangle, if else false

//Ex: isTriangle(1,2,2) returns true / isTriangle(7,2,2) returns false

//

function isTriangle(a, b, c) {
    //check that all side length conditions are true
    return (a + b > c) && (a + c > b) && (b + c > a);
  }

//Passed