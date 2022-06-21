//RivasDev22 Daily Codewars - Removing Elements

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//None of the arrays will be empty, so you don't have to worry about that!

//
//Create new array to return filter

//Filter out where the array index is even

function removeEveryOther(arr){
    let removed = arr.filter((element, i) => {
      return i % 2 === 0;
    })
    
    return removed;
  }

//Passed