/*
This is a two player battle ship game. It has been designed to be played on a 4 x 4 grid. 
Players will alternate between entering X and Y coordinates. If the coordinates hit a ship,
players are rewarded with a "hit" message. Else, a miss. The game is limited to 10 rounds 
and players are limited to 4 ships. 
*/

// The game is defined as a function as follows:
const battleship = () => {
  // Player 1 and 2 objects are defined, with the "name" key stored as input from a prompt message.
  // Following the key at name, are the keys shipCount and gameBoard. Players are allowed 4 ships. 
  // Currently, there are no ships assigned to each player's gameBoard.
  let player1 = {
    name: prompt(
      `We need to know the first commander's name. What is the first commander's name?`
    ),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };
  let player2 = {
    name: prompt(
      `We need to know the second commander's name. What is the second commander's name?`
    ),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };

  // This function generates random X/Y coordinates to be assigned to the
  // objects listed above at the key of gameBoard. This allows the program
  // to automatically and randomly assign ships to the 4 x 4 game board.
  const randomShipGenerator = (firstOrSecondPlayer) => {
    // Set iteration index to 0;
    let i = 0;
    // Set number of loops to <= 3 to get 4 ships
    while (i <= 3) {
      // Call the Math.floor and Math.random methods to generate a random
      // number between 0 and 4, excluding 4.
      let xCoordinate = Math.floor(Math.random() * 4);
      let yCoordinate = Math.floor(Math.random() * 4);
      // Check to see if the 2-dimensional array in the player 1 or 2 object
      // at the key of gameBoard is set to 0 and therefore, without a ship, 
      // and if it is, assign a ship at that location.
      if (firstOrSecondPlayer.gameBoard[xCoordinate][yCoordinate] === 0) {
        firstOrSecondPlayer.gameBoard[xCoordinate][yCoordinate] = 1;
        i++;
        }
      }
    }
  // randomShipGenerator function is called with both player1 and player2.
  randomShipGenerator(player1);
  console.log(player1.gameBoard);
  randomShipGenerator(player2);
  console.log(player2.gameBoard);
  // For the sake of brevity, we've limited the number of rounds for both players to 10.
  let totalAllowedPlayerAttempts = 10;
  // The following prompt briefs players the name of the game and its purpose. 
  let startTheGame = prompt(
    `Man your battle stations! This is Battleship! \nLatest intelligence reports indicate that there are 4 enemy ships in your 4 x 4 territory. \nCommanders - As we are running on limited offensive capability, your orders are to destroy all enemy ships with 10 strikes or fewer. \nAre the players ready to start the game? \nType 'yes' or 'no'. Do not include the quotations`
  );
  // The game begins by looping between two players
  if (startTheGame === "yes") {
    // Assuming the players have agreed to play, we set a loop for 10 rounds
    for (var i = 0; i < 10; i++) {
      // Before each loop is iterated, we set edge cases for the loop. In this
      // case, the edge cases check to see if totalAllowedPlayerAttempts (rounds)
      // does not exceed 10. If it does, the game returns a message and ends the loop.
      if (totalAllowedPlayerAttempts === 0) {
        return "Game over! Neither Commander managed to sink all of the enemy ships! \nCommanders, you will be court-martialed for disobeying a direct order!";
      }
      // Our next edge case is to check in the beginning of the loop if either player
      // has lost all of their ships. If true, an alert shows to indicate which player
      // has lost and then returns a message indicating the winner and ending the loop.
      if (player1.shipCount === 0) {
        alert(`${player1}! All our ships are destroyed! You've dishonored your country!`);
        return `Commander ${player2} has emerged victorious! Ol' Davey Jones bows in your honor.`;
      } else if (player2.shipCount === 0) {
        alert(`${player2}! All our ships are destroyed! You've dishonored your country!`);
        return `Commander ${player1} has emerged victorious! Ol' Davey Jones bows in your honor.`;
      }
      // Player one moves first. Players are given a choice to select a number between 0 and 3,
      // including 0 and 3. X and Y coordinates are separated into two prompts.
      let player1XcoordinateStrike = prompt(
        `Commander ${player1.name}, you will now enter your coordinates. Enter your X-coordinate: (Choose 0, 1, 2, or 3. Do not include quotes.)`
      );
      let player1YcoordinateStrike = prompt(
        `Order received, Commander. Enter your Y-coordinate: (Choose 0, 1, 2, or 3. Do not include quotes.)`
      );
      // If player's coordinates match a ship at the either player 1 or player 2 object at the 
      // key of gameBoard, then a hit alert is given. Then the chosen X/Y coordinates, if it was
      // a hit, is rewritten to be zero, so that false positives are not displayed. For example,
      // ships destroyed must be erased from board. So we assign the now empty X/Y coordinate to 0.
      if (
        player2.gameBoard[player1XcoordinateStrike][
          player1YcoordinateStrike
        ] === 1
      ) {
        player2.gameBoard[player2XcoordinateStrike][player2YcoordinateStrike] = 0;
        player2.shipCount--;
        alert(
          `Commander ${player1.name}! Reports indicate we've made a direct hit!`
        );
        // Else nothing is rewritten and player is given a miss message.
      } else {
        alert(`Reports indicate a complete miss, Commander ${player1.name}!'`);
      }
      // Player two moves second.
      let player2XcoordinateStrike = prompt(
        `Commander ${player2.name}, you will now enter your coordinates. Enter your X-coordinate: (Choose 0, 1, 2, or 3. Do not include quotes.)`
      );
      let player2YcoordinateStrike = prompt(
        `Order received, Commander. Enter your Y-coordinate: (Choose 0, 1, 2, or 3. Do not include quotes.)`
      );
      if (
        player1.gameBoard[player2XcoordinateStrike][
          player2YcoordinateStrike
        ] === 1
      ) {
        player2.gameBoard[player1XcoordinateStrike][player1YcoordinateStrike] = 0;
        player1.shipCount--;
        alert(
          `Commander ${player2.name}! Reports indicate we've made a direct hit!`
        );
      } else {
        alert(`Reports indicate a complete miss, Commander ${player2.name}!'`);
      }
      // Recall that total rounds were 10. Once the first loop is iterated,
      // the number of rounds is decremented from the totalAllowedPlayerAttemps variable.
      totalAllowedPlayerAttempts--;

      // In the case of a player wanting to quit mid game, after each player chooses coordinates
      // and messages are given, either hit or miss, players have a choice to decide to continue
      // to play or to quit, so that they can break from the loop themselves. 
      let quitPrompt = prompt(
        `(Do you want to continue the game? Type 'yes' or 'no', without quotations.)`
      );
      if (quitPrompt === "yes") {
        continue;
      } else {
        return "No problem! Hope you enjoyed!";
      }
    }
    // Another quit opportunity, but this is the initial quit choice given when a player decides
    // if they are ready or not to enter into the game.
  } else if (startTheGame === "no") {
    return `OK! We can always play another time! Have a great day!`;
  }
};

const gameResult = battleship();

const htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;
