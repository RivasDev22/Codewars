//RivasDev22 Daily Codewars - Covfefe

//You must replace any occurence of the sequence coverage by covfefe

//If you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

//
//

function covfefe(str){
    return str.includes('coverage') ? str.replace(/coverage/gi , 'covfefe') : str + ' covfefe';
    //Checks if string conatins coverage, if so replaces, else adds to the string
  }