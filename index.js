round = 1;
pointPlayer1 = 0;
pointPlayer2 = 0;
randomRollP1 = ['1', '2', '3', '4', '5', '6'];
let rollP1 = randomRollP1[Math.floor(Math.random() * 6 + 0)];

randomRollP2 = ['1', '2', '3', '4', '5', '6'];
let rollP2 = randomRollP2[Math.floor(Math.random() * 6 + 0)];

let player1 = prompt ('Player 1: Enter your name')
let player2 = prompt ('Player 2: Enter your name')

play();
function play() {
do{
let rollingP1 = prompt (player1 + ' Would you like to roll the dice?');
if (rollingP1 == 'yes'){
  console.log('Ok your roll is ' + rollP1 + '!');
}else{
  console.log('Ok Goodbye!');
}
let rollingP2 = prompt (player2 + ' Would you like to roll the dice?');
if (rollingP2 == 'yes'){
  console.log('Ok! your roll is ' + rollP2 + '!');
}else{
  console.log('Ok Goodbye!')
}
if (rollP1 > rollP2){
let difference = rollP1 - rollP2
console.log('The difference between your dice rolls is ' + difference + '!')
}else if (rollP2 > rollP1){
  let difference = rollP2 - rollP1
  console.log('The difference between your dice rolls is ' + difference + '!')
}else{
  console.log('The difference between your dice rolls is 0!')
}
round++

}while(round <= 1){
}
again = prompt('Do you want to play again?');
if (again == 'yes') {
play();
} else {
console.log(player1 + "'s final point is "  + pointPlayer1)
console.log(player2 + "'s final point is " + pointPlayer2)
console.log('Game Over');
}
}