//RivasDev22 Daily Codewars - Reversed Strings

//Complete the solution so that it reverses the string passed into it.

//
//Use loop to go through string backwards into new string

function solution(str){
    let reverse = ""
    for (let i = str.length-1; i > -1; i--){
      reverse += str[i]
    }
    return reverse
  }

//Passed