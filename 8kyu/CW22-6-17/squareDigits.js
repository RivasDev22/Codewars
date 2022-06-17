//RivasDev22 Daily Codewars - Square Every Digit

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer

//Split the number, then map a new array changing num by the power of 2

//Parse the string to an int to return result

function squareDigits(num){
    let sqrNum = new Array();
    ('' + num).split('').map(n => {
      sqrNum.push(n**2);
     })
    
    return parseInt(sqrNum.join(''));
  }
  
  //Passed