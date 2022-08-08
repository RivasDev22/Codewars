//RivasDev22 Daily Codewars - Rock Paper Scissors!

//Let's play! You have to return which player won! In case of a draw return Draw!

//
//Pr: p1, p1 - string of "rock" "paper" or "scissors"

//Rt: Draw if players are the same, who won if they are different

//Ex: nameShuffler('john McClane') returns 'McClane john'

const rps = (p1, p2) => {
    //Check p1 position then compare to p2 retrun draw if equal
    if (p1 === p2){
      return "Draw!"
    }
    //Check when p1 is scissors
    else if (p1 == "scissors"){
      if (p2 == "paper"){
        return "Player 1 won!"
        }
      else {
        return "Player 2 won!"
      }
    }
    //Check when p1 is rock
    else if (p1 == "rock"){
      if(p2 == "scissors"){
        return "Player 1 won!"
        }
      else {
        return "Player 2 won!"
      }
    }
    //Check when p1 is paper
    else if (p1 == "paper"){
      if(p2 == "rock"){
        return "Player 1 won!"
        }
      else {
        return "Player 2 won!"
      }
    }
}

//Passed