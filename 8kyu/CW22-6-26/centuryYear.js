//RivasDev22 Daily Codewars - Century From Year

//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

//Given a year, return the century it is in.

//
// Check if the year goes into the next century, if not return the year divided by 100 and add 1

function century(year) {
    return (year % 10 == 0 ? year / 100 : Math.floor(year / 100 + 1))
  }

//Passed