//RivasDev22 Daily Codewars - Return Negative

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//The number can be negative already, in which case no change is required.

//
//Pr: num - a positive or negative number

//Rt: The negative value

//Ex: makeNegative(1) returns -1 makeNegative(-5) returns -5

function makeNegative(num) {
    //If num is greater than 0 multiply the num by -1
    return num > 0 ? num *= -1: num;
  }

//Passed 