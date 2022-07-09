//RivasDev22 Daily Codewars - L1: Set Alarm

//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

//
//Check the circumstance employed is true and vacation is false

function setAlarm(employed, vacation){
    return employed && !vacation;
  }
//Passed

//Another Solution

//const setAlarm = (employed, vacation) => employed && !vacation;