//RivasDev22 Daily Codewars - Total Amount of Points

//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

//For example: ["3:1", "2:2", "0:1", ...]

//Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

//if x > y: 3 points
//if x < y: 0 point
//if x = y: 1 point
//Notes:

//there are 10 matches in the championship
//0 <= x <= 4
//0 <= y <= 4

//
//Pr: games - array of scores

//Rt: Total points where 3 are earned when x is greater than y and 1 is awarded when points are equal

//Ex: points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) returns 0

function points(games) {
    //Initalize total points
    let total = 0
    //Loop through game elements
      for(const score of games) {
        //Split scores by the separator
          const arr = score.split(":")
          //If x is greater than y add 3 points
          if(Number(arr[0]) > Number(arr[1])) {
              total += 3
          //If scores are equal add 1 point
          } else if (Number(arr[0]) == Number(arr[1])) {
              total += 1
          }
      }
      //Return total
      return total
  }

  //Passed