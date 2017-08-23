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
Player.prototype.winner = function(score){
  var current = this.currentScore;
  if(current + score >= 100){
    player1.turnScore = 0;
    player1.currentScore = 0;
    player2.turnScore = 0;
    player2.currentScore = 0;
  alert(this.name + " wins! With a score of: " + (current + score));
  }
}

player1 = new Player("Noah", [], 0, 0);
player2 = new Player("Aaron", [], 0, 0);

$(document).ready(function(){
  $(".rollOne").click(function(){
    var roll = player1.roll();
    var current = player1.currentScore;
    player1.winner(roll);
    if(roll === 0){
      $("#playerOneDisplayRoll").empty();
      $(".playerTwo").toggle();
      $(".playerOne").toggle();
    } else {
    $(".playerOneName").text(player1.name);
    $("#playerOneDisplayRoll").append("<li>Your Roll: " + roll +  " | Current Score: " + (current + player1.turnScore) + "</li>");
    }
  })
  $(".holdOne").click(function() {
    player1.score(player1.turnScore);
    $(".playerOne").toggle();
    $(".playerTwo").toggle();
    $("#playerOneCurrentScore").text(player1.currentScore);
    $("#playerOneDisplayRoll").empty();


  })
  $(".rollTwo").click(function(){
    var roll = player2.roll();
    var current = player2.currentScore;
    player2.winner(roll);
    if(roll === 0){
      $("#playerTwoDisplayRoll").empty();
      $(".playerTwo").toggle();
      $(".playerOne").toggle();
    } else {
    $(".playerTwoName").text(player2.name);
    $("#playerTwoDisplayRoll").append("<li>Your Roll: " + roll +  " | Current Score: " + (current + player2.turnScore) + "</li>");
    }
  })
  $(".holdTwo").click(function() {
    player2.score(player2.turnScore);
    $(".playerOne").toggle();
    $(".playerTwo").toggle();
    $("#playerTwoCurrentScore").text(player2.currentScore);
    $("#playerTwoDisplayRoll").empty();


  })
})


// $(".playerOne ul").append("<li>Your Roll: " + roll +  " = " + (current + player1.turnScore) + "</li>");
