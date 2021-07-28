randomNameP1 = ['Joe', 'Joey', 'Chipotle', 'Dorito', 'Baba', 'Boey', 'Cake', 'Samantha', 'Noodle'];
let pickedRandomNameP1 = randomNameP1[Math.floor(Math.random() * 9 + 0)];

let player1 = prompt ('Player 1: Enter your name');
console.log(player1);

if (player1 == ''){
  console.log('Welcome ' + pickedRandomNameP1 + ' to the Dice Rolling Game!')

}else{
  console.log('Welcome ' + player1 + ' to the Dice Rolling Game!')
}
randomNameP2 = ['Joe', 'Joey', 'Chipotle', 'Dorito', 'Baba', 'Boey', 'Cake', 'Samantha', 'Noodle'];
let pickedRandomNameP2 = randomNameP2[Math.floor(Math.random() * 9 + 0)];

let player2 = prompt ('Player 2: Enter your name');
console.log(player2);

  if (player2 == ''){
  console.log('Welcome ' + pickedRandomNameP2 + ' to the Dice Rolling Game!')
  }else{
  console.log('Welcome ' + player2 + ' to the Dice Rolling Game!')
}

round = 1;
pointPlayer1 = 0;
pointPlayer2 = 0;
randomRollP1 = ['1', '2', '3', '4', '5', '6'];
let rollP1 = randomRollP1[Math.floor(Math.random() * 6 + 0)];

randomRollP2 = ['1', '2', '3', '4', '5', '6'];
let rollP2 = randomRollP2[Math.floor(Math.random() * 6 + 0)];

play();
function play() {
do{
let rollingP1 = prompt (player1 + ' Would you like to roll the dice?');
if (rollingP1 == 'yes'){
  console.log('Ok your roll is ' + rollP1 + '!');
  pointPlayer1++
}else{
  console.log('Ok Goodbye!');
}
let rollingP2 = prompt (player2 + ' Would you like to roll the dice?');
if (rollingP2 == 'yes'){
  console.log('Ok! your roll is ' + rollP2 + '!');
  pointPlayer2++
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

}while(round <= 10){
}
again = prompt('Do you want to play again?');
if (again == 'yes') {
play();
} if (pointPlayer1 = 20){
  console.log ('Congratulations ' + player1 + ' You Win! Better luck next time ' + player2 + ' you were ' )
}else if (pointPlayer2 = 20){
  console.log ('Congratulations ' + player2 + ' You Win! Better luck next time ' + player1 + ' you were ')
}
console.log('Game Over');
}