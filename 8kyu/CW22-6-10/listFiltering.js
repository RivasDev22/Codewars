//RivasDev22 Daily Codewars - List Filtering

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//Use filter to remove string type

function filter_list(l) {
    return l.filter(x => typeof x === "number")
  }

  //Passed