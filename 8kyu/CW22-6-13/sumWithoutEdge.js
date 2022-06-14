//RivasDev22 Daily Codewars - Sum Without Highest and lowest Number

//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//
//Check that array is not null and can be added if the length is over 3

//Sort the array from lowest to highest, use index 1 and length -1 to exclude edges when adding the sum

function sumArray(array) {
    if (array == null)
    {
        return 0;
    }
    else if (array.length < 2)
    {
        return 0;
    }
    else
    {
        array = array.sort(function(a,b) {return a - b;});
        var sum = 0;
        for (var i = 1; i < array.length - 1; i++) {
            sum += array[i];
        }
        return sum;
    }
}

//Passed