//RivasDev22 Daily Codewars - String Repeat

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//Examples (input -> output)

//
//Use while loop to take number into new string

function repeatStr (n, s) {
    let say = '';
    while (n > 0){
        say += s;
        n--;
    }
    return say;
  }

  //Passed