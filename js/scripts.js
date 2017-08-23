function Player(name, rollArr, turnScore, currentScore) {
  this.name = name;
  this.rollArr = [];
  this.turnScore = 0;
  this.currentScore = 0;
}

Player.prototype.roll = function(){
  var dice = Math.floor(Math.random() * (7-1)) +1;
  if (dice === 1) {
    alert("You rolled a one, fucker!");
    this.score(0);
    return 0;
  } else {
    this.turnScore += dice;
    return dice;
  }
}


Player.prototype.score = function(score){
  this.currentScore += score;
  this.turnScore = 0;
}


player1 = new Player("Noah", [], 0, 0);
player2 = new Player("Aaron", [], 0, 0);

$(document).ready(function(){
  $(".rollOne").click(function(){
    var roll = player1.roll();
    alert(roll);
    alert(player1.turnScore)
    alert(player1.currentScore);
    if(roll === 0){
      $(".playerTwo").toggle();
      $(".playerOne").toggle();
      alert(player1.turnScore);
      alert(player1.currentScore);
    }
  })
  $(".holdOne").click(function() {
    player1.score(player1.turnScore);
    $(".playerOne").toggle();
    $(".playerTwo").toggle();
    alert(player1.currentScore);
  })
  $(".rollTwo").click(function(){
    var roll = player2.roll();
    alert(roll);
    alert(player2.turnScore)
    alert(player2.currentScore);
    if(roll === 0){
      $(".playerTwo").toggle();
      $(".playerOne").toggle();
      alert(player2.turnScore);
      alert(player2.currentScore);
    }
  })
  $(".holdTwo").click(function() {
    player2.score(player2.turnScore);
    $(".playerOne").toggle();
    $(".playerTwo").toggle();
    alert(player2.currentScore);
  })
})
