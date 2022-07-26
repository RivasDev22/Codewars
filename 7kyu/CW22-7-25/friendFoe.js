//RivasDev22 Daily Codewars - Friend or Foe?

//Make a program that filters a list of strings and returns a list with only your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Note: keep the original order of the names in the output.

//Pr: friends - array of names

//Rt: Names with exactly four letters

//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends){
    //Filter array to elements that are equal to 4 in length
    return friends.filter(p => p.length === 4);
  }

//Passed