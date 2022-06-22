//RivasDev22 Daily Codewars - Calculate BMI

//Write function bmi that calculates body mass index (bmi = weight / height2)


//
//Use ternary operator to go through variations

function bmi(weight, height) {
    return (weight/height**2 <= 18.5? "Underweight" : weight/height**2 <= 25? "Normal" : weight/height**2 <= 30? "Overweight" : "Obese" );
  }

//Passed

//If else statement could be easier to read for development

function bmi(weight, height) {
    var result = weight/height**2 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
  }