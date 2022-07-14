//RivasDev22 Daily Codewars - Sum Arrays

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//
//Reduce to add the elements in the array. Have 0 as inital value

function sum (numbers) {
    "use strict";
    return numbers.reduce((a, b) => a + b, 0) 
};

//Passed