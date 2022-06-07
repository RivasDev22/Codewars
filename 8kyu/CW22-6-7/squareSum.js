//RivasDev22 Daily Codewars - Square(n) Sum

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//
//Map new array with squares
//Add sum of array items

//Can add power function to reduce statement so no mapis needed

function squareSum(numbers){
    return numbers.reduce((a, b) => a + Math.pow(b,2), 0);
}

//Passed