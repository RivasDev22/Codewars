//RivasDev22 Daily Codewars - Name on Billboard

//You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

//You can not use multiplier "*" operator.

//
//Pr: name - str to count characters of / price - the price of each char

//Rt: total price

//Ex: "Claude Miljenko") returns 450 / "Anani Fridumar") returns 420

//

function billboard(name, price = 30){
    let total = 0
    for(const _ of name){
      total += price;
    }
   return total
 } 

//Passed