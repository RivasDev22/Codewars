//RivasDev22 Daily Codewars - Area or Perimeter

//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.

//If it is a square, return its area. If it is a rectangle, return its perimeter.

//
//Pr: l- length  w- width

//Rt: Area if shape is a square

//Ex: areaOrPerimeter(4 , 4) returns 16 areaOrPerimeter(6 , 10) returns 32

//Ps: Use if statement to check if l and w are equal

//If equal, return l squared. If not, return the sum of both parameters doubled

//Note : Ternary operator did not work with Node 8.1

const areaOrPerimeter = function(l , w) {
    return (l == w) ? l** 2 : 2*(w+l)
  };

//Passed