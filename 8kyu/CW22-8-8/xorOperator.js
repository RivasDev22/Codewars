//RivasDev22 Daily Codewars - Exclusive "or" (xor) Logical Operator

//The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise

//
//Pr: a , b - boolean input

//Rt: True only when one is true and the other false

//Ex: xor(false, false) returns false , xor(false, true) returns true

function xor(a, b) {
    //Use or operator for one input being false
    return (a && !b) || (!a && b)
  }
//Passed