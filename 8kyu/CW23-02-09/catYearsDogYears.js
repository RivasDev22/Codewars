//RivasDev22 Daily Codewars - Cat Years, Dog Years

//I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago.

//Return their respective ages now as [humanYears,catYears,dogYears]

//15 cat years for first year, +9 cat years for second year, +4 cat years for each year after that

//15 dog years for first year, +9 dog years for second year, +5 dog years for each year after that

//
//Pr: humanYears- int of humans age

//Rt: human years, cat years, then dog years

//Ex: humanYearsCatYearsDogYears(2) returns [2,24,24],  humanYearsCatYearsDogYears(10) reutrns [10,56,64]

//

var humanYearsCatYearsDogYears = function(humanYears) {
    var catY = 0
    var dogY = 0
    //initalize vars
    for(let i=0; i <= humanYears; i++){
      if (i == 1) {
        catY += 15
        dogY += 15
      }
      //Add for first year
      else if (i == 2){
        catY += 9
        dogY += 9
      }
      //Add for second year
      else if (i > 2){
        catY += 4
        dogY += 5
      }
      //Add remaining years
    }
      return [humanYears,catY,dogY];
      //return results
    }
    