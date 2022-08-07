//RivasDev22 Daily Codewars - Name Shuffler

//Write a function that returns a string in which firstname is swapped with last name.

//
//Pr: str - string with first and last name

//Rt: Last name first and first name after

//Ex: nameShuffler('john McClane') returns 'McClane john'

function nameShuffler(str){
    //Split string, reverse order, then join with space
    return str.split(" ").reverse().join(" ");
  }

//Passed