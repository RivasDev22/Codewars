//RivasDev22 Daily Codewars - Exclamation marks series #1

//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

//
//Pr: string - input string to remove ! from

//Rt: String with one less ! if it ends with one or more

//Ex: remove("Hi!") returns "Hi",  remove("Hi!!!") returns "Hi!!"

//

function remove (string) {
    //Use replace with regex for end of the string
    return string.replace(/!$/, "")
  }

//Passed