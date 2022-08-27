//RivasDev22 Daily Codewars - Abbreviate a Two Word Name

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//
//Pr: name - str of only two words to abbreviate

//Rt: Capitalized first character from each word separated by a dot

//Ex: abbrevName("Sam Harris") returns "S.H"

//

function abbrevName(name){
    //split str by the space
    let array = name.split(" ")
    //Take the first character of the first and second items in array and capitalize them
    return array[0].charAt(0).toUpperCase() + "." + array[1].charAt(0).toUpperCase()
  }

//Passed