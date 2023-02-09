//RivasDev22 Daily Codewars - How Many Lightsabers Do You Own?

//Inspired by the development team at Vooza, write the function that

//accepts the name of a programmer, and
//returns the number of lightsabers owned by that person.
//The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. 
//Anyone else owns 0.

//
//Pr: name - string input

//Rt: 18 if name is Zach, 0 for everyone else

//Ex: howManyLightsabersDoYouOwn("Adam") returns 0

//
function howManyLightsabersDoYouOwn(name) {
    return name == "Zach" ? 18 : 0;
  }