//RivasDev22 Daily Codewars - Grasshopper - Summation

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//Pr: num - int

//Rt: sum of the numbers from 1 to num

//Ex: summation(8) returns 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
    //Initialize sum 
    let sum = 0
    //Loop with a counter that goes up to num
    for(let i = 0 ; i <= num ; i++){
    //Adds the counter to sum total
      sum += i;
    }
    return sum;
  }

//Passed