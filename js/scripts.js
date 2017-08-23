function Player(name, rollArr, turnScore, rollingScore) {
  this.name = name;
  this.rollArr = [];
  this.turnScore = 0;
  this.rollingScore = 0;
}

Player.prototype.roll = function(){
  var dice = Math.floor(Math.random() * (7-1)) +1;
  if (dice === 1) {
    this.rollingScore=0;
    alert("You rolled a one, fucker!");
    return 0;
  } else {
    return dice;
  }
}


Player.prototype.score = function(score){
  this.rollingScore += score;
  this.turnScore = 0;
}

Player.prototype.switchPlayer = function (player) {
  if (player === "player1") {
    return "player2";
  } else if (player === "player2"){
    return "player1";
  } else {
    return "player1";
  }
}

// function playerSwitch(player) {
//
// }
player1 = new Player("Noah", [], 0, 0);
player2 = new Player("Aaron", [], 0, 0);

$(document).ready(function(){
  $(".roll").click(function(){
    var roll = player1.roll();
    alert(roll);
    player1.score(roll);
    alert(player1.rollingScore);
    // player.switchPlayer(player);

  })
})
