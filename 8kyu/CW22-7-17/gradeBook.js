//RivasDev22 Daily Codewars - Grasshopper Grade Book

//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

//
//Use if else statements to determine the letter grade earned from score average

function getGrade (s1, s2, s3) {
    var avg = (s1 + s2 + s3) / 3;
    if (avg >= 90 && avg <= 100) {
        return 'A';
    } else if (avg >= 80 ) {
      return 'B';
    } else if (avg >= 70 ) {
      return 'C';
    } else if (avg >= 60) {
      return 'D';
    } else{
      return 'F';
    }
  }

//Passed