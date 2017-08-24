function Player(name, rollArr, turnScore, currentScore) {
  this.name = name;
  this.rollArr = [];
  this.turnScore = 0;
  this.currentScore = 0;
}

Player.prototype.roll = function(){
  var dice = Math.floor(Math.random() * (7-1)) +1;
  if (dice === 1) {
    alert("You rolled a one, beautiful!");
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
  if(current + score >= 20){
    player1.turnScore = 0;
    player1.currentScore = 0;
    player2.turnScore = 0;
    player2.currentScore = 0;
  alert(this.name + " wins! With a score of: " + (current + score));
  }
}
player1 = new Player("", [], 0, 0);
player2 = new Player("", [], 0, 0);


$(document).ready(function(){
  function compuTron() {
    for (i=0; player2.turnScore < 10 && roll !== 0; i++) {
      var roll = player2.roll();
      var current = player2.currentScore;
      player2.winner(roll);
      // $("#playerTwoCurrentScore").text(player2.currentScore);
      // $("#playerOneCurrentScore").text(player1.currentScore);

      console.log("computer " + roll)
      if(roll === 0){
        // $("#playerTwoDisplayRoll").empty();
        $(".computerTron").toggle();
        $(".playerOne").toggle();
        $(".holdComp").trigger('click');
      } else {
      $("#playerTwoDisplayRoll").append("<li>Your Roll: " + roll +  " | Current Score: " + (current + player2.turnScore) + "</li>");

      }
    }
  }

  $("#radios").submit(function(event){
    event.preventDefault();
    var choice = $("input:radio[name=playerSelect]:checked").val();
    if(choice === "twoPlayer"){
      $(".userInput").show();
    } else{
        player1.name = "you"
        player2.name = "COMPUTER-TRON"
        $(".playerTwoName").text(player2.name);
        $(".playerOneName").text(player1.name);
        $(".game").show();
    }
  });

  $(".userInput").submit(function(event){
    event.preventDefault();
    var nameOne = $("#name1").val();
    var nameTwo = $("#name2").val();
    player1.name = nameOne;
    player2.name = nameTwo;
    $(".game").show()
    $(".playerTwoName").text(player2.name);
    $(".playerOneName").text(player1.name);

  })

  $(".rollOne").click(function(){
    var roll = player1.roll();
    var current = player1.currentScore;
    player1.winner(roll);
    // $("#playerOneCurrentScore").text(player1.currentScore);
    // $("#playerTwoCurrentScore").text(player2.currentScore);

    if(roll === 0){
      $("#playerOneDisplayRoll").empty();
      if(player2.name==="COMPUTER-TRON") {
      $(".computerTron").toggle();
      $(".playerOne").toggle();
      compuTron();
      $(".holdComp").trigger('click');

      }else {
        $(".playerOne").toggle();
        $(".playerTwo").toggle();
      }
    }
      else {
    $("#playerOneDisplayRoll").append("<li>Your Roll: " + roll +  " | Current Score: " + (current + player1.turnScore) + "</li>");
    }
  })

  $(".holdOne").click(function() {
    player1.score(player1.turnScore);
    if(player2.name==="COMPUTER-TRON") {
      $(".playerOne").toggle();
      $(".computerTron").toggle();
      $("#playerOneCurrentScore").text(player1.currentScore);

      compuTron();
      $(".holdComp").trigger('click');
    } else {
      $(".playerOne").toggle();
      $(".playerTwo").toggle();
      $("#playerOneCurrentScore").text(player1.currentScore);
      $("#playerOneDisplayRoll").empty();

    }
  })

  $(".rollTwo").click(function(){
    var roll = player2.roll();
    var current = player2.currentScore;
    player2.winner(roll);
    $("#playerTwoCurrentScore").text(player2.currentScore);

    if(roll === 0){
      $("#playerTwoDisplayRoll").empty();

      $(".playerTwo").toggle();
      $(".playerOne").toggle();
    } else {
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



  $(".holdComp").click(function() {
    player2.score(player2.turnScore);
    $(".playerOne").toggle();
    $(".computerTron").toggle();
    $("#playerTwoCurrentScore").text(player2.currentScore);
  });
})


// $(".playerOne ul").append("<li>Your Roll: " + roll +  " = " + (current + player1.turnScore) + "</li>");
