//RivasDev22 Daily Codewars - Counting Sheep

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//
//Have counter go through array with for loop to find sheep

function countSheeps(arrayOfSheep) {
    var sheep = 0
    for (let i = 0; i < arrayOfSheep.length; i++){
      if (arrayOfSheep[i] == true){
        sheep += 1
      }
    }
    return sheep;
  }

  //Passed