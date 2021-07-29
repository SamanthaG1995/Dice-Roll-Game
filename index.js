//randomises a random name from the list
randomNameP1 = ['Joe', 'Joey', 'Chipotle', 'Dorito', 'Baba', 'Boey', 'Cake', 'Samantha', 'Noodle'];
let pickedRandomNameP1 = randomNameP1[Math.floor(Math.random() * 9 + 0)];

//asks player 1 to input their name
let player1 = prompt ('Player 1: Enter your name');

//if user enters nothing it will generate random name from list
if (player1 == ''){
  console.log('Welcome ' + pickedRandomNameP1 + ' to the Dice Rolling Game!')
}else{
  console.log('Welcome ' + player1 + ' to the Dice Rolling Game!')
}
//randomises name from teh list
randomNameP2 = ['Joe', 'Joey', 'Chipotle', 'Dorito', 'Baba', 'Boey', 'Cake', 'Samantha', 'Noodle'];
let pickedRandomNameP2 = randomNameP2[Math.floor(Math.random() * 9 + 0)];

//asks player 2 to input their name
let player2 = prompt ('Player 2: Enter your name');

//if user enters nothing it will generate random name from the list
  if (player2 == ''){
  console.log('Welcome ' + pickedRandomNameP2 + ' to the Dice Rolling Game!')
  }else{
  console.log('Welcome ' + player2 + ' to the Dice Rolling Game!')
}
//what the points start on
pointPlayer1 = 0;
pointPlayer2 = 0;


//generates a random number from 1-6
randomRollP1 = ['1', '2', '3', '4', '5', '6'];
let rollP1 = randomRollP1[Math.floor(Math.random() * 6 + 0)];

randomRollP2 = ['1', '2', '3', '4', '5', '6'];
let rollP2 = randomRollP2[Math.floor(Math.random() * 6 + 0)];

//starts a loop
play();
function play() {
do{
  //asks the user if they want to roll the dice
let rollingP1 = prompt (player1 + ' Would you like to roll the dice?');
if (rollingP1 == 'yes'){
  console.log('Ok your roll is ' + rollP1 + '!');
  pointPlayer1++
}else{
  console.log('Ok Goodbye!');
}
// asks the user if they want to roll the dice
let rollingP2 = prompt (player2 + ' Would you like to roll the dice?');
if (rollingP2 == 'yes'){
  console.log('Ok! your roll is ' + rollP2 + '!');
  pointPlayer2++
}else{
  //if the users type anything other than yes it will display the message
  console.log('Ok Goodbye!')
}
//explains the differrence between the two dice rolls
if (rollP1 > rollP2){
let difference = rollP1 - rollP2
console.log('The difference between your dice rolls is ' + difference + '!')
}else if (rollP2 > rollP1){
  let difference = rollP2 - rollP1
  console.log('The difference between your dice rolls is ' + difference + '!')
}else{
  console.log('The difference between your dice rolls is 0!')
}
//ask the users if they want to play again, if 'yes' the loop starts again.
let again = prompt('Do you want to play again?');
if (again == 'yes') {
play();

//stops the game when 1 player hits 20
} if (pointPlayer1 = 20){
  console.log ('Congratulations ' + player1 + ' You Win! Better luck next time ' + player2 + ' you were ' )
}
else if (pointPlayer2 = 20){
  console.log ('Congratulations ' + player2 + ' You Win! Better luck next time ' + player1 + ' you were ' )
}
}