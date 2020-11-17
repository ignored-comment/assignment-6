const battleship = () => {
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
  const shipCounter = 4;
  const randomShipGenerator = (firstOrSecondPlayer) => {
    for (var i = 1; i <= ; i++) {
      let xCoordinate = Math.floor(Math.random() * 4);
      let yCoordinate = Math.floor(Math.random() * 4);
      if (firstOrSecondPlayer.gameBoard[xCoordinate][yCoordinate] === 0) {
        firstOrSecondPlayer.gameBoard[xCoordinate][yCoordinate] = 1;
        shipCounter++
      } else if (firstOrSecondPlayer.gameBoard[xCoordinate][yCoordinate] === 1) {
        
      }
    }
  };

  randomShipGenerator(player1);
  console.log(player1.gameBoard);
  randomShipGenerator(player2);
  console.log(player2.gameBoard);
  let totalAllowedPlayerAttempts = 10;

  let startTheGame = prompt(
    `This is Battleship! Latest intelligence reports indicate that there are 4 enemy ships in your 4 x 4 territory. Commanders - As we are running on limited offensive capability, your orders are to destroy all enemy ships with 10 strikes or fewer. Are the players ready to start the game? Type 'yes' or 'no'. Do not include the quotations`
  );
  if (startTheGame.toLowerCase() === "yes") {
    // The Game begins by looping between two players
    for (var i = 0; i < 10; i++) {
      if (totalAllowedPlayerAttempts === 0) {
        return "Game over! Neither Commander managed to sink all of the enemy ships! Commanders, you will be court-martialed for disobeying a direct order!";
      }
      // Player one moves first.
      let player1XcoordinateStrike = prompt(
        `Commander ${player1.name}, you will now enter your coordinates. Enter your X-coordinate: (Choose 0, 1, 2, or 3. Do not include quotes.)`
      );
      let player1YcoordinateStrike = prompt(
        `Order received, Commander. Enter your Y-coordinate: (Choose 0, 1, 2, or 3. Do not include quotes.)`
      );
      if (
        player2.gameBoard[player1XcoordinateStrike][
          player1YcoordinateStrike
        ] === 1
      ) {
        player2.shipCount--;
        alert(
          `Commander ${player1.name}! Our reports indicate we've made a direct hit!`
        );
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
        player1.shipCount--;
        alert(
          `Commander ${player2.name}! Our reports indicate we've made a direct hit!`
        );
      } else {
        alert(`Reports indicate a complete miss, Commander ${player2.name}!'`);
      }
      totalAllowedPlayerAttempts--;

      let quitPrompt = prompt(
        `(Do you want to continue the game? Type 'yes' or 'no', without quotations.)`
      );
      if (quitPrompt === "yes") {
        continue;
      } else {
        return "No problem! Hope you enjoyed!";
      }
    }
  } else if (startTheGame.toLowerCase() === "no") {
    return `OK! We can always play another time! Have a great day!`;
  }
  if (player1.shipCount === 0) {
    return `Commander ${player2} has emerged victorious! Ol' Davey Jones bows in your honor.`;
  } else if (player2.shipCount === 0) {
    return `Commander ${player1} has emerged victorious! Ol' Davey Jones bows in your honor.`;
  }
};

const gameResult = battleship();

const htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;

// else if (player1.shipCount === 0) {
//   return `Commander ${player1.name}! All your ships were destroyed! You've failed your country!`;
// } else if (player2.shipCount === 0) {
//   return `Commander ${player2.name}! All your ships were destroyed! You've failed your country!`;
// }
