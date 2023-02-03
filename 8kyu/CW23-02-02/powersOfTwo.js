//RivasDev22 Daily Codewars - Powers of 2!

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive )

//
//Pr: n int, non negative

//Rt: 2 to the power of n exponents starting at 0

//Ex: n = 2  ==> [1, 2, 4]  returns [2^0, 2^1, 2^2] or [1, 2, 4]

//

function powersOfTwo(n){
    //Create an empty array
    let result = []
    //Itterate for n number of times
    for (let i=0; i<=n; i++)
    //Add the ints exponent to the array
      result[i] = 2**i;
      //return array
    return result;
  }

//Passed