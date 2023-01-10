function confirmer() {
  return confirm("Voulez vous jouer ?");
}
function prompter() {
  return prompt("Saisissez un numero entre ");
}
function IntGenerator() {
  return Math.floor(Math.random() * 10);
}
function compareNumbers(userNumber, computerNumber) {
  if (userNumber == computerNumber) {
    alert("WINNER");
  }
  if (userNumber > computerNumber) {
    alert(
      "Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau"
    );
  }
  if (userNumber < computerNumber) {
    alert(
      "Votre numéro est plus petit que celui de l’ordinateur, devinez à nouveau"
    );
  }
}
function playTheGame() {
  var confirmation = confirmer();
  var i = 0;
  var findNum = IntGenerator();
  while (i < 3) {
    if (confirmation == true) {
      var num = prompter();
      if (num.length == 0 || isNaN(num)) {
        alert("Désolé Pas un numéro, au revoir");
      } else if (num < 0 || num > 10) {
        alert("Désolé, ce n’est pas un bon numéro, au revoir");
        break;
      } else {
        compareNumbers(num, findNum);
      }
    } else {
      alert("Pas de problème, au revoir");
      break;
    }
    i++;
  }
}
