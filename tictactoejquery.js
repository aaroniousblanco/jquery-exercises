
// issue with wins not registering
//issue with draws not registering
// issue with preventing addition clicks to register
var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var winner = false;
var tries = 0;

$(document).ready(function() {

function checkForWinner(player) {
  console.log(player);
  var sq1 = $('#0').text();
  var sq2 = $('#1').text();
  var sq3 = $('#2').text();
  var sq4 = $('#3').text();
  var sq5 = $('#4').text();
  var sq6 = $('#5').text();
  var sq7 = $('#6').text();
  var sq8 = $('#7').text();
  var sq9 = $('#8').text();
    if (player === sq1 && player === sq2 && player === sq3) {
      winner = true;
    } else if (player === sq4 && player === sq5 && player === sq6) {
      winner = true;
    } else if (player === sq7 && player === sq8 && player === sq9) {
      winner = true;
    } else if (player === sq1 && player === sq4 && player === sq7) {
      winner = true;
    } else if (player === sq2 && player === sq5 && player === sq8) {
      winner = true;
    } else if (player === sq3 && player === sq6 && player === sq9) {
      winner = true;
    } else if (player === sq1 && player === sq5 && player === sq9) {
      winner = true;
    } else if (player === sq3 && player === sq5 && player === sq7) {
      winner = true;
    }
  console.log(winner);
  return winner;
}

var player = 'O';
$('.square').click(function () {
    var value = $(this).text();
      if (value === '') {
        $(this).text(player);
        var check = checkForWinner(player);
          if (check === true) {
            $("#winnerdeclaration").text(player + "wins!");
            $(".square").addClass("disableclick");
          }
        if (player === 'O') {
          player = 'X';
        } else {
          player = 'O';
        }
      }
    if (tries === 8 && checkForWinner(player) === false) {
      $("#winnerdeclaration").text("It's a draw.");
      $(".square").addClass("disableclick");
    }
    tries += 1;
  }); //end of '.square' click


$('#restartGame').click(function () {
  winner = false;
  $(".square").removeClass("disableclick");
  $('.square').text('');
  $("#winnerdeclaration").text('');
  tries = 0;
});

}); //end of DOM ready
