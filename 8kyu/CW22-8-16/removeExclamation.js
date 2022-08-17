//RivasDev22 Daily Codewars - Remove Exclamation Marks

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//
//Pr: s -string to remove all ! from

//Rt: string with no !

//Ex: removeExclamationMarks("Hello World!") returns "Hello World"

//

function removeExclamationMarks(s) {
    //Use global tag with replace to remove all exclamation marks
    return s.replace(/!/g, "");
  }

//Passed