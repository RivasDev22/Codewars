//RivasDev22 Daily Codewars - Money, Money, Money

//Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

//The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

//
//Pr: principal - int interest - int rate tax - int tax rate desired - number to go to

//Rt: year - years get to desired amount

//Ex: calculateYears(1000, 0.05, 0.18, 1100) returns 3

function calculateYears(principal, interest, tax, desired) {
    //initialize year
    let year = 0;
    
    //While the amount of money is less than the desired loop through
    while (principal < desired){
        //Determine how much money will be added minus the taxed amount
      let money = principal * interest - (principal * interest * tax);
      //Add to total
      principal += money;
      //Add year
      year++;
    }
    
    return year;
  }

//Passed