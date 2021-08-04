//explains the rules of the game
let start = prompt("Welcome to the Dice Rolling Game. Roll the digital dice and compete against your friend to try and get the highest dice roll. If you roll a 2 your point will be doubled. The player with the most six's will get an additional 2 points at the end of the game. Press q to quit. Press s to start" );
if (start == 's'){
//asks the player 1 to enter a name
let player1 = prompt ('Player 1: Enter your name');
//asks the user to re-enter their name if nothing is entered
if (player1 == ''){
console.log('That is an invalid input. Please enter a name');
let player1 = prompt('Player 1: Enter your name')
}

//asks player 2 to enter a name
let player2 = prompt ('Player 2: Enter your name');
//asks the user to re-enter their name if nothing is entered
if (player2 == ''){
console.log('that is an invalid input. Please enter a name')
let player2 = prompt('Player 2: Enter your name')
}
//welcomes the user to the game
console.log('Welcome ' + player1 + ' and ' + player2 + ' to the Dice Rolling Game!')

let dice = [1, 2, 3, 4, 5, 6,]
let length = dice.length
rollP1 = Math.floor(Math.random() * length + 1)
numberP1 = (dice[rollP1])
rollP2 = Math.floor(Math.random() * length + 1)
numberP2 = (dice[rollP2])

let pointP1 = 0
let pointP2 = 0
let luckyNumberP1 = 0
let luckyNumberP2 = 0
let round = 0

var playerRound = prompt('How many rounds would you like to play?');
while((isNaN(playerRound))||(playerRound < 1)||(playerRound == null)||(playerRound==' ')||(playerRound % 1 != 0)){
  console.log('That is not a valid number. Please enter a number')
  playerRound = prompt('How many rounds would you like to play?')
}

do{
rollP1 = Math.floor(Math.random() * length + 1)
numberP1 = (dice[rollP1])
rollP2 = Math.floor(Math.random() * length + 1)
numberP2 = (dice[rollP2])

var rollingP1 = prompt (player1 + ' would you like to roll the dice?');
if (rollingP1 == 'yes'){
  console.log('Ok your roll is ' + rollP1 + '!');

if(rollP1 == 1){
  pointP1++
}
if(rollP1 == 2){
  console.log(player1 + ' got a 2! They get double points!')
  pointP1++
  pointP1++
  pointP1++
  pointP1++
  rollP1 = 4
}
if(rollP1 == 3){
  pointP1++
  pointP1++
  pointP1++
}
if(rollP1 == 4){
  pointP1++
  pointP1++
  pointP1++
  pointP1++
}
if(rollP1 == 5) {
  pointP1++
  pointP1++
  pointP1++
  pointP1++
  pointP1++
}
if(rollP1 == 6) {
  pointP1++
  pointP1++
  pointP1++
  pointP1++
  pointP1++
  pointP1++
}
}else if(rollingP1 == 'no'){
  console.log('Ok thank you for playing!')
  break;
}else{
  console.log('that is an invalid input. Please enter yes or no')
  rollingPlayer1 = prompt('would you like to roll the dice: yes or no:')
  console.log('Ok your roll is ' + rollP1 + '!');
}

var rollingP2 = prompt (player2 + ' would you like to roll the dice?');
if (rollingP2 == 'yes'){
  console.log('Ok your roll is ' + rollP2 + '!');

if(rollP2 == 1){
  pointP2++
}
if(rollP2 == 2){
  console.log(player2 + ' got a 2! They get double points!')
  pointP2++
  pointP2++
  pointP2++
  pointP2++
  rollP2 = 4
}
if(rollP2 == 3){
  pointP2++
  pointP2++
  pointP2++
}
if(rollP2 == 4){
  pointP2++
  pointP2++
  pointP2++
  pointP2++
}
if(rollP2 == 5) {
  pointP2++
  pointP2++
  pointP2++
  pointP2++
  pointP2++
}
if(rollP2 == 6) {
  pointP2++
  pointP2++
  pointP2++
  pointP2++
  pointP2++
  pointP2++
}
}else if(rollingP2 == 'no'){
  console.log('Ok thank you for playing!')
  break;
}else{
  console.log('That is an invalid input. Please enter yes or no')
  rollingPlayer2 = prompt('Would you like to roll the dice: yes or no:')
    console.log('Ok your roll is ' + rollP2 + '!');
}

if(rollP1 < rollP2){
  console.log(player2 + ' won this round!')
}else if(rollP1 > rollP2){
  console.log(player1 + ' won this round!')
}else{
  console.log("It's a tie!")
}
round++
console.log(player1 + ' has ' + pointP1 + ' points!')
console.log(player2 + ' has ' + pointP2 + ' points!')
}
while(round < playerRound)

if(pointP2 < pointP1){
console.log(player1 + ' wins the game!')
}
else if(pointP2 > pointP1){
  console.log(player2 + ' wins the game!')
}else{
  console.log("It was a tie!")
}
}else if(start = 'q'){
  console.log('Ok thank you for playing!')
}
