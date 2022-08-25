//RivasDev22 Daily Codewars - Pillars

//There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar)

//
//Pr: numPill - number of pillars (≥ 1) / dist - distance between pillars (10 - 30 meters) / width - of the pillar (10 - 50 centimeters)

//Rt: distance between pillars in centimeters

//Ex: pillars(2, 20, 25) returns 2000 / pillars(1, 10, 10) returns 0

//

function pillars(numPill, dist, width) {
    //check if num of pillars is 1, if so distance is 0
    //else, return the widths of the pillars between, and the distance in centimeters between
    return numPill == 1 ? 0 : width * (numPill - 2) + dist * 100 * (numPill - 1);
  }