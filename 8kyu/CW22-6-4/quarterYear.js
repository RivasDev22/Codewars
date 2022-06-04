//RivasDev22 Daily Codewars - Quarter of The Year

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//
//Use tenary operator to go through from the first quarter

const quarterOf = (month) => {
    return(month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : month <= 12 ? 4 : "error")
  }

  //Passed