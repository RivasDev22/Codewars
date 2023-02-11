//RivasDev22 Daily Codewars - Sum Of Cubes

//Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

//Assume that the input n will always be a positive integer.

//
//Pr: n -int to add the sum of each num

//Rt: sum of cubes

//Ex: 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

//

function sumCubes(n){
    var total = 0
    for (let i = 1; i <= n; i++){
      total += i**3
    }
      return total;
  }