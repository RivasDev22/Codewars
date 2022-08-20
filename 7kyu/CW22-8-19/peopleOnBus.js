//RivasDev22 Daily Codewars - Number of People in the Bus

//There is a bus moving in the city, and it takes and drop some people in each bus stop.

//You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

//Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

//
//Pr: busStops - array of int pairs the first being number getting on the bus and the second are the ones getting off

//Rt: number of people on the bus after the stops

//Ex: number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) returns 21

//

var number = function(busStops){
    //initalize people
    var people = 0;
    //loop through bus stop arrays
      for (let stop of busStops) {
        //Add the first element and subtract the second
        people += stop[0] - stop[1];
      }
      //return result
      return people;
  }

//Passed