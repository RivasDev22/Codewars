//RivasDev22 Daily Codewars - Odd or Even?

//Given a list of integers, determine whether the sum of its elements is odd or even.

//Give your answer as a string matching "odd" or "even".

//If the input array is empty consider it as: [0] (array with a zero)

//
//Pr: array - array of numbers

//Rt: "odd" if sum of array is odd or "even" if sum is even. Zeros and empty arrays are even

//Ex: oddOrEven([0]) returns 'even'

function oddOrEven(array) {
    return array.reduce((a , b) => a + b, 0) % 2 == 0 ? "even" : "odd";
 }

//Passed