//RivasDev22 Daily Codewars - Grasshopper - Summation

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//
//Pr: number - a number 0-9

//Rt: word of the number

//Ex: switchItUp(3) returns "Three"

function switchItUP(number){
    //Switch statement for 0-9
    switch(number){
        case 0:
            return "Zero";
            break;
        case 1:
            return "One";
            break;
        case 2:
            return "Two";
            break;
        case 3:
            return "Three";
            break;
        case 4:
            return "Four";
            break;
        case 5:
            return "Five";
            break;
        case 6:
            return "Six";
            break;
        case 7:
            return "Seven";
            break;
        case 8:
            return "Eight";
            break;
        case 9:
            return "Nine";
            break;
    }
}

//Passed

//Reduced function

//switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]