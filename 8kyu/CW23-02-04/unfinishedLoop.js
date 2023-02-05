
//RivasDev22 Daily Codewars - Unfinished Loop - Bug Fixing #1

//Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

//function createArray(number){
//    var newArray = [];
//    for(var counter = 1; counter <= number;){
//      newArray.push(counter);
//    }
//    return newArray;
//  }

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
        //Added counter increase
      newArray.push(counter);
    }
    
    return newArray;
  }

//Passed