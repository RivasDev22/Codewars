//RivasDev22 Daily Codewars - Divide and Conquer

//Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

//Return as a number.

//
//

function divCon(x){
    let num = 0
    let stri = 0
     x.map(i => (typeof i === "string" ? (stri += i * 1) : (num += i)));
    return num - stri;
  }