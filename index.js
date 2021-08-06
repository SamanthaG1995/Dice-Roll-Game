//explains the rules of the game
let start = prompt("Welcome to the Dice Rolling Game. Compete against your friend to try get the highest dice roll. If you roll a 2 your point will be doubled (you will get 4 points). The player with the most rolls of the lucky number you choose will get an additional 2 points at the end of the game. Press s to begin" );

//starts the game if 's' is entered
if (start == 's'){

//asks player 1 to enter their name
let player1 = prompt ('Player 1: Enter your name');

//asks the user to re-enter their name if nothing is entered
if (player1 == ''){
console.log('That is an invalid input. Please enter a name');
player1 = prompt('Player 1: Enter your name');
}

//asks player 2 to enter a name
let player2 = prompt ('Player 2: Enter your name');

//asks the user to re-enter their name if nothing is entered
if (player2 == ''){
console.log('That is an invalid input. Please enter a name')
player2 = prompt('Player 2: Enter your name');
}

//welcomes the users to the game
console.log('Welcome ' + player1 + ' and ' + player2 + ' to the Dice Rolling Game!');

//sets dice to specific numbers
let dice = [1, 2, 3, 4, 5, 6,];
let length = dice.length;


//explains what variables start on
let pointP1 = 0;
let pointP2 = 0;
let round = 0;
let luckyNumber = 0;
let luckyNumberP1 = 0;
let luckyNumberP2 = 0;

//loop if user wants to play again
play();
function play() {
//asks the user how many rounds they want to play
let playerRound = prompt('How many rounds would you like to play?');

//the boundaries for their input
while((isNaN(playerRound))||(playerRound < 1)||(playerRound > 10)||(playerRound == null)||(playerRound==' ')||(playerRound % 1 != 0)){
  //asks the user to enter a number again incase of an invalid number
  console.log('That is not a valid number. Please enter a number from 1-10');
  playerRound = prompt('How many rounds would you like to play?');
}
//asks the user what the lucky number should be
let luckyNumber = prompt('What should the lucky number be?');

//the boundaries for their input
while((isNaN(luckyNumber))||(luckyNumber < 1)||(luckyNumber > 6)||(luckyNumber == null)||(luckyNumber ==' ')||(luckyNumber % 1 != 0)){

  //asks the user to enter a number again incase of an invalid number
  console.log('That is not a valid number. Please enter a number from 1-6');
  luckyNumber = prompt('What should the lucky number be?');
}

do{
//gives a name to a random roll
let rollP1 = Math.floor(Math.random() * length + 1);
let numberP1 = (dice[rollP1]);
let rollP2 = Math.floor(Math.random() * length + 1);
let numberP2 = (dice[rollP2]);

//asks the player if they want to roll the dice, if yes the game starts
let rollingP1 = prompt (player1 + ' would you like to roll the dice?');
if (rollingP1 == 'yes'){
  console.log('Ok your roll is ' + rollP1 + '!');

//adds points due to their roll e.g. if rolls a 5, they get 5 point
if(rollP1 == 1){
  pointP1++
}else if(rollP1 == 2){
  console.log(player1 + ' got a 2! They get double points!');
  pointP1 = pointP1 + 4;
  rollP1 = 4;
}else if(rollP1 == 3){
 pointP1 = pointP1 + 3;
}else if(rollP1 == 4){
 pointP1 = pointP1 + 4;
}else if(rollP1 == 5) {
 pointP1 = pointP1 + 5;
}else if(rollP1 == 6) {
 pointP1 = pointP1 + 6;
}
if (rollP1 == luckyNumber){
luckyNumberP1++
console.log(player1 + ' got a ' + luckyNumber + '!')
}

//if they answer no to 'whould you like to roll the dice' it will display a message
}else if(rollingP1 == 'no'){
  console.log('Ok thank you for playing!');
//stops the game
  break;

  //if they answer anything elsee rather than 'no' or 'yes' they will re-answer the question
}else{
  console.log('That is an invalid input. Please enter yes or no');
  rollingPlayer1 = prompt('Would you like to roll the dice?');
  console.log('Ok your roll is ' + rollP1 + '!');
}
//asks the user if they want to roll the dice, if yes, it starts the game
let rollingP2 = prompt (player2 + ' would you like to roll the dice?');
if (rollingP2 == 'yes'){
  console.log('Ok your roll is ' + rollP2 + '!');

//adds points to each dice roll, e.g. if they roll a 5, they will get 5 points
if(rollP2 == 1){
  pointP2 = pointP2 + 1
}else if(rollP2 == 2){
  console.log(player2 + ' got a 2! They get double points!');
  pointP2 = pointP2 + 4;
  rollP2 = 4;
}else if(rollP2 == 3){
 pointP2 = pointP2 + 3;
}else if(rollP2 == 4){
 pointP2 = pointP2 + 4;
}else if(rollP2 == 5) {
 pointP2 = pointP2 + 5;
}else if(rollP2 == 6) {
 pointP2 = pointP2 + 6;
}
if (rollP2 == luckyNumber){
luckyNumberP2++
console.log(player2 + ' got a ' + luckyNumber + '!')
}
// if they say no to 'Would you like to roll the dice' it will display that message
}else if(rollingP2 == 'no'){
  console.log('Ok thank you for playing!');
//stops the game
  break;

//if they said anything else rather than 'yes' or 'no' it will re-ask the question
}else{
  console.log('That is an invalid input. Please enter yes or no');
  let rollingPlayer2 = prompt('Would you like to roll the dice?');
  console.log('Ok your roll is ' + rollP2 + '!');
}

//displays a message saying who won using the highest dice roll
if(rollP1 < rollP2){
  console.log(player2 + ' won this round!');
}else if(rollP1 > rollP2){
  console.log(player1 + ' won this round!');
}else{
  console.log("It's a tie!");
}
//adds round
round++
//displays how many points each person has
console.log(player1 + ' has ' + pointP1 + ' points!');
console.log(player2 + ' has ' + pointP2 + ' points!');
}
//uses the players input at the start and stops the game at their input number
while(round < playerRound);

//compares who has the most amount of sixes and adds 2 points onto the person with the most
if(luckyNumberP1 > luckyNumberP2){
  console.log(player1 + " has the most " + luckyNumber + "'s and will get 2 points");
pointP1 = pointP1 + 2;
}else if(luckyNumberP2 > luckyNumberP1){
  console.log(player2 + " has the most " + luckyNumber + "'s and will get 2 points");
pointP2 = pointP2 + 2;
}else{
  console.log("You both got the same amount of 6's, no one will get the additional 2 points")
}
//compares who has the most points and displays the winner
if(pointP2 < pointP1){
console.log(player1 + ' wins the game!');
}else if(pointP2 > pointP1){
  console.log(player2 + ' wins the game!');
}else if (pointP1 == pointP2){
  console.log("It was a tie!");
}

//asks the players if they want to play again
let again = prompt('Do you want to play again?');
if (again == 'yes') {
play();
} else {
//prints the final score
console.log('Your final scores are...');
console.log(player1 + ': ' + pointP1);
console.log(player2 + ': ' + pointP2);
}
}
}