//RivasDev22 Daily Codewars - Double Char

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//Examples (Input -> Output):

//"String"      -> "SSttrriinngg" : "Hello World" -> "HHeelllloo  WWoorrlldd" : "1234!_ "     -> "11223344!!__  "

//
//Create a new string going through original

//Add the index of string twice to new one

function doubleChar(str) {
    let doubled = ""
    for(let i = 0; i < str.length; i++){
      doubled += str[i] + str[i]
    }
    return doubled;
  }

  //Passed