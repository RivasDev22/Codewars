//RivasDev22 Daily Codewars - Exes and Ohs

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//
//Pr: str - string that may not have any x or o in it

//Rt: true amount of xs is equal to amount of os

//Ex: XO("xxOo") returns true

//Short Alt Versions

function XO(str) {
    //Check string with match and global and ignore case flags for xs
    let x = str.match(/x/gi);
    //Check string with match and global and ignore case flags for x
    let o = str.match(/o/gi);
    //Compare lengths of both new strings
    return (x && x.length) === (o && o.length);
  }

  function XO(str) {
    //Change the strings to lower case and compare the lengths
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}