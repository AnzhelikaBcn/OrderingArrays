//Finding the player with the maximum points from the test data array
function findPlayerWithMaxScore(players) {
  if (players.length === 0) {
    return "Массив игроков пуст.";
  }

  let maxScore = -Infinity; // Starting value for maximum points
  let maxScorePlayer = null; // Starting value for player with maximum points

  for (const player of players) {
    if (player.scorePoints > maxScore) {
      maxScore = player.scorePoints;
      maxScorePlayer = player;
    }
  }

  return maxScorePlayer;
}

function findManyPlayerWithMaxScore(players) {
    if (players.length === 0) {
      return "Массив игроков пуст.";
    }
  
    let maxScore = -Infinity; // Начальное значение для максимального счета
    let maxScorePlayers = []; // Начальное значение для игроков с максимальным счетом
  
    for (const player of players) {
      if (player.scorePoints > maxScore) {
        maxScore = player.scorePoints;
        maxScorePlayers = [player];
      } else if (player.scorePoints === maxScore) {
        maxScorePlayers.push(player);
      }
    }
  
    if (maxScorePlayers.length === 0) {
      return null;
    }
  
    return maxScorePlayers;
  }

// 1. Player with maximum score at the beginning of the array
const players1 = [
  { id: 1, name: "Alice", scorePoints: 10000 },
  { id: 2, name: "Bob", scorePoints: 4500 },
  { id: 3, name: "Carol", scorePoints: 3600 },
  { id: 4, name: "David", scorePoints: 3433 },
];

// 2. Player with maximum score at the end of the array
const players2 = [
  { id: 1, name: "Eve", scorePoints: 4500 },
  { id: 2, name: "Frank", scorePoints: 3600 },
  { id: 3, name: "Grace", scorePoints: 3433 },
  { id: 4, name: "Hank", scorePoints: 10000 },
];

// 3. Players with minimum and maximum scores
const players3 = [
  { id: 1, name: "Isabel", scorePoints: 0 },
  { id: 2, name: "Jack", scorePoints: 10000 },
];

// 4. Empty array of players
const players4 = [];

// 5. Single player
const players5 = [{ id: 1, name: "Sam", scorePoints: 2500 }];

// 6. Players with negative scores
const players6 = [
  { id: 1, name: "Megan", scorePoints: -100 },
  { id: 2, name: "Nick", scorePoints: -500 },
];

// 7. Array of 100 players with random names and scores
const players7 = [];
for (let i = 1; i <= 100; i++) {
  const randomName = "Player" + i;
  const randomScore = Math.floor(Math.random() * 10000); // Генерация случайных баллов
  players7.push({ id: i, name: randomName, scorePoints: randomScore });
}

// 8. Players with the same maximum scores in the array
const players8 = [
  { id: 1, name: "Jon", scorePoints: 10000 },
  { id: 2, name: "Eve", scorePoints: 4500 },
  { id: 3, name: "Frank", scorePoints: 3600 },
  { id: 4, name: "Grace", scorePoints: 10000 },
  { id: 5, name: "Arvid", scorePoints: 3433 },
  { id: 6, name: "Hank", scorePoints: 10000 },
];

// Вызов функции для поиска игрока с максимальными баллами
const maxScorePlayer1 = findPlayerWithMaxScore(players1);
const maxScorePlayer2 = findPlayerWithMaxScore(players2);
const maxScorePlayer3 = findPlayerWithMaxScore(players3);
const maxScorePlayer4 = findPlayerWithMaxScore(players4);
const maxScorePlayer5 = findPlayerWithMaxScore(players5);
const maxScorePlayer6 = findPlayerWithMaxScore(players6);
const maxScorePlayer7 = findPlayerWithMaxScore(players7);
const maxScorePlayer8 = findManyPlayerWithMaxScore(players8);

console.log("Player with max score in players1:", maxScorePlayer1);
console.log("Player with max score in players2:", maxScorePlayer2);
console.log("Player with max score in players3:", maxScorePlayer3);
console.log("Player with max score in players4:", maxScorePlayer4);
console.log("Player with max score in players5:", maxScorePlayer5);
console.log("Player with max score in players6:", maxScorePlayer6);
console.log("Player with max score in players7:", maxScorePlayer7);
console.log("Players with max score in players8:", maxScorePlayer8);
