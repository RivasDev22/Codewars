//RivasDev22 Daily Codewars - Sum Mixed Array

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

//
//Reduce array getting sum of result to Number

function sumMix(x){
    let total = 0
    return x.reduce((a, b) => Number(a) + Number(b));
  }

//Passed