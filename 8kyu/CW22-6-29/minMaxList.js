//RivasDev22 Daily Codewars - Find Maximum Values of a List

//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

//Use Math min and max with apply spread

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

//Passed

//Other solution using sort and original list[0]

var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}