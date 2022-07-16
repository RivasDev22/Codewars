//RivasDev22 Daily Codewars - Remove First and Last Character

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//
//Use slice to cut of the end of the array index

function removeChar(str){
    return str.slice(1 , str.length - 1)
   };

//Passed