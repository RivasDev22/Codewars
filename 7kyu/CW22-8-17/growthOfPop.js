//RivasDev22 Daily Codewars - Growth of a Population

//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//
//Pr: animal - p0 - int of starting population / percent - int to convert for increase / aug - int of additional population coming in / p - int of end population

//Rt: number of years it wil take to get to p

//Ex: nbYear(1500000, 2.5, 10000, 2000000) returns 10 / nbYear(1500, 5, 100, 5000) returns 15

//

function nbYear(p0, percent, aug, p) {
    //initialize year
    let year = 0;
    
    //loop until p0 is greater than p
    while (p0 < p){
      //floor the int of population with increase of the percentage growth and additional inhabitants
      p0 += Math.floor((percent/100) * p0 + aug);
      //increase year counter
      year++;
    }
    return year;
  }

//Passed