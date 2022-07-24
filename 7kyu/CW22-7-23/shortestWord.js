//RivasDev22 Daily Codewars - Shortest Word

//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

//Your task is to write a function maskify, which changes all but the last four characters into '#'.

//
//Pr: cc - number

//Rt: number masked by # except for the last four numbers

//Ex: maskify('11111') returns '#1111'

function maskify(cc) {
    //String to hold result
    let mask = ''

    //For loop to add hashtags until the last four digits
    for(i=0; i < cc.length-4; i++){
        mask += '\#'
      }
    
    //Add the last four digits
    mask += cc.substring(cc.length-4, cc.length)

    return mask;
    }

//Passed