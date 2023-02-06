//RivasDev22 Daily Codewars - Vowel Remover

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//
//Pr: string - input

//Rt: string with no vowels

//Ex: shortcut(hello) returns hll

function shortcut(string){
    return string.replace(/a|e|i|o|u/g, "");
    //replaces vowels not case insensitive
  }