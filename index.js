randomRollP1 = ['1', '2', '3', '4', '5', '6'];
let rollP1 = randomRollP1[Math.floor(Math.random() * 6 + 0)];

randomRollP2 = ['1', '2', '3', '4', '5', '6'];
let rollP2 = randomRollP2[Math.floor(Math.random() * 6 + 0)];

let rollingP1 = prompt ('Player 1: Would you like to roll the dice?');
if (rollingP1 == 'yes'){
  console.log('Ok your roll is ' + rollP1 + '!');
}else{
  console.log('Ok Goodbye!');
}

let rollingP2 = prompt ('Player 2: Would you like to roll the dice?');
if (rollingP2 == 'yes'){
  console.log('Ok! your roll is ' + rollP2 + '!');
}else{
  console.log('Ok Goodbye!')
}

if (rollP1 > rollP2){
let difference = rollP1 - rollP2
console.log('The difference between your dice rolls is ' + difference)
}else if (rollP2 > rollP1){
  let difference = rollP2 - rollP1
  console.log('The difference between your dice rolls is ' + difference)
}else{
  console.log('The difference between your dice rolls is 0')
}