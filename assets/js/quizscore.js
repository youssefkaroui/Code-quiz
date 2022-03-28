function getHighscores() {
    
  var highscoreslist = JSON.parse(window.localStorage.getItem("highscores")) || [];

 
  highscoreslist.sort(function(a, b) {
    return b.score - a.score;
  });

  highscoreslist.forEach(function(score) {
   
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

function clearList() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearList;


getHighscores();