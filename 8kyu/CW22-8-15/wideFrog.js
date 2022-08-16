//RivasDev22 Daily Codewars - The Wide-Mouthed frog!

//The wide-mouth frog is particularly interested in the eating habits of other creatures.

//He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

//When he meets the alligator, it then makes a tiny mouth.

//
//Pr: animal - str of animal encountered by the frog

//Rt: small if the animal is an alligator case insensitive

//Ex: boolToWord(true), 'Yes'

//

function mouthSize(animal) {
    //Use toLowerCase so the text is case insensitive
    //If the animal is an aligator, return small, else return wide
    return animal.toLowerCase() == "alligator" ? "small" : "wide";
  }