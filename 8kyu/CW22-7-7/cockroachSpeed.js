//RivasDev22 Daily Codewars - Beginner Series #4 Cockroach

//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

//
//Multiply the km by 100,000 to get cm, then divide by 3600 seconds in an hour

function cockroachSpeed(s) {
    return(Math.floor((s*100000)/3600))
  }

//Passed