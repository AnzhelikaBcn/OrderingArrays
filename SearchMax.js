const players = [
    {
        "id": 1,
        "name": "Ivan",
        "scorePoints": 4500
    },
    {
        "id": 1,
        "name": "Petr",
        "scorePoints": 3600
    },
    {
        "id": 1,
        "name": "Vadim",
        "scorePoints": 3433
    },
    {
        "id": 1,
        "name": "Olga",
        "scorePoints": 2356
    }

]
// Creating an empty array to store points
const scores = [];

// 1. Filling an array with point values from an array with for

// for (let i = 0; i < players.length; i++) {
//     scores.push(players[i].scorePoints);
//   }

// 2. Filling an array with point values from an array with for in

for (const key in players) {
    scores.push(players[key].scorePoints)
}

// Finding the maximum

const maxScore = Math.max(...scores);

// Method for finding an array element with the maximum number of points, we also use the arrow function

const playerWithMaxScore = players.find(player => player.scorePoints === maxScore)

// First console.log("Player with max of score:", playerWithMaxScore);:

console.log("_____________ 1 output option _______________");
console.log(`Player with max of score: 
{ 
id: ${playerWithMaxScore.id}, 
name: '${playerWithMaxScore.name}', 
scorePoints: ${playerWithMaxScore.scorePoints} 
}`
);
//  2 option:  
console.log("_____________ 2 output option _______________");
console.log("Player with max of score:", playerWithMaxScore);

//  3  option: 
console.log("_____________ 3 output option _______________");
console.log("Player with max of score");
console.log(playerWithMaxScore);