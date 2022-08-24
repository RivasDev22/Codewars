//RivasDev22 Daily Codewars - Find the Stray Number

//You are given an odd-length array of integers, in which all of them are the same, except for one single number.

//Complete the method which accepts such an array, and returns that single different number.

//The input array will always be valid! (odd-length >= 3)

//
//Pr: numbers - array of at least 3 numbers with only one being different

//Rt: odd number out

//Ex: stray([1, 1, 2]) returns 2

//

function stray(numbers) {
    //sort numbers in order
    let list = numbers.sort();
    //compare first two numbers. If different, return the first number. Otherwise return last
    return list[0] != list[1] ? list[0] : list[list.length -1]; 
  }

//Passed