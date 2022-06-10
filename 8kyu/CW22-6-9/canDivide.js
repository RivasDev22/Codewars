//RivasDev22 Daily Codewars - Can we divide it?

//Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

//Ex

//(-12, 2, -6)  ->  true
//(-12, 2, -5)  ->  false

//(45, 1, 6)    ->  false
//(45, 5, 15)   ->  true

//
//Check that remainder from each number is 0 to determine true or false

function isDivideBy(number, a, b) {
    return (number % a == 0 && number % b == 0 ? true : false)
  }

//Passed