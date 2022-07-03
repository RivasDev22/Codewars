//RivasDev22 Daily Codewars - Count by X

//Create a function with two arguments that will return an array of the first (n) multiples of (x).

//Assume both the given number and the number of times to count will be positive numbers greater than 0.

//Return the results as an array (or list in Python, Haskell or Elixir).

//
//Use for loop to go through n times and push the x multiple

function countBy(x, n) {
    let z = [];
    for (let i = 1; i < n + 1; i++){
      z.push (x * i);
    }
    return z;
  }

//Passed