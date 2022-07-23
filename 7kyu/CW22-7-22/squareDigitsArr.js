//RivasDev22 Daily Codewars - Square Every Digit

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//
//Pr: num -integer input

//Rt: New number

//Ex: squareDigits(3212) returns 9414  squareDigits(2112)returns 4114

//Ps: Split the integer by the digits

//Map new number that has digit squared

function squareDigits(num){
    let sqrNum = new Array();
    ('' + num).split('').map(n => {
      sqrNum.push(n**2);
     })
    
    return parseInt(sqrNum.join(''));
  }

//Passed