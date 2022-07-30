//RivasDev22 Daily Codewars - How good are you really?

//You receive an array with your peers' test scores. Now calculate the average and compare your score!

//Return True if you're better, else False!

//Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//
//Pr: classPoints - array of class scores yourPoints - Your score to compare

//Rt: True if score is higher than the average

//Ex: betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) returns true

function betterThanAverage(classPoints, yourPoints) {
    //Compares your points to the average which uses normal length for your score in the avg total
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

//Passed