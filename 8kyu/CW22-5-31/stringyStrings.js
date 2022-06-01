//RivasDev22 Daily Codewars - Stringy Strings

//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

//the string should start with a 1.

//a string with size 6 should return :'101010'.

//with size 4 should return : '1010'.

//with size 12 should return : '101010101010'.

//The size will always be positive and will only use whole numbers.

//Use for loop to go through string
//Start at 1 to size
//Add remainder to string

function stringy(size) {
    let combo = ""
    for (let i = 1; i <= size; i++){
        combo += i % 2;
    }
    return combo;
  }
  //Passed