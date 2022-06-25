//RivasDev22 Daily Codewars - Will There be Enough Space?

//Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

//You have to write a function that accepts three parameters:

//cap is the amount of people the bus can hold excluding the driver.

//on is the number of people on the bus excluding the driver.

//wait is the number of people waiting to get on to the bus excluding the driver.

//If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

//
//Check if the cap is greater than onboard and wait list

//Return 0 if cap is greater, and if it is less subtract the cap from the amount of people

function enough(cap, on, wait) {
    return (cap > on + wait ? 0 : (on + wait) - cap)
  }

//Passed