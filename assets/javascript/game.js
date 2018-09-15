var words = [
  "everclear",
  "red hot chili peppers",
  "blind melon",
  "nirvana",
  "collective soul"
];
// console.log(words);
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
var currentWord = document.getElementById("currentWord");
function underscores(word) {

var answer = [];
var i;
for (i = 0; i < word.length; i++) {
  if (word[i] === " ") {
    answer.push("&nbsp;");
  }
  else {
    answer.push("_");
  }
}
return answer;
}

function display (array, location) {
  var toWrite = " ";

  for (i = 0; i < array.length; i++) {
    toWrite = toWrite + array[i] + " ";
  }

  location.innerHTML = toWrite;
}



var guessesRemaining = 14;
var letterIndex = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function updateGuesses() {
  document.querySelector("#guessesRemaining").innerHTML = "Guesses Remaining: " + score;
}


