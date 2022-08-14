//RivasDev22 Daily Codewars - Do I get a bonus?

//It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

//Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

//If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

//
//Pr: salary - input int bonus - bool if bonus is true

//Rt: Salary in £ multiplied by 10, if bonus is equal to true

//Ex: bonusTime(25000, true) returns '£250000'  bonusTime(10000, false) returns '£10000'

//

function bonusTime(salary, bonus) {
    //If bonus is true, multiply salary by 10, else salary in £
    return bonus ? "\u00A3" + salary * 10 : "\u00A3" + salary
   }

//Passed