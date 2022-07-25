//RivasDev22 Daily Codewars - Vowel Count

//Return the number (count) of vowels in the given string.

//e will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

//
//Pr: str - string input

//Rt: count - number of vowels in string

//Ex: getCount("abracadabra") returns 5

function getCount(str) {
    //Initalize counter variable and have array of vowels
    let count = 0
    let vowels = ["a", "e", "i", "o", "u"]
    
    //Loops through each character and checks of it matches a vowel
    for(let char of str){
        //Increases the count if it is a vowel
      if (vowels.includes(char)){ 
        count ++;
        }
    }
      //Return result
    return count;
  }

//Passed